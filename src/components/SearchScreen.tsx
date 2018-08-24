import * as React from 'react';
import SearchComponent from 'src/components/SearchComponent';
// @ts-ignore
import { debounce, throttle } from 'throttle-debounce';

// Note, this is excluded by .gitignore, you will need to create this file
// and enter a valid API_KEY. You can register for an API key here:
// https://developers.google.com/places/web-service/get-api-key
var keys = require('src/utils/apikeys.json');

const API_KEY = keys['API_KEY'];
const API_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

interface State {
  query: string;
  loading: boolean;
  error: string;
  results: object[];
}

export default class SearchScreen extends React.Component<{}, State> {
  private waitingForQuery: string;
  private queryCache : { [index:string] : any } = {};

  state = {
    query: '',
    loading: false,
    error: '',
    results: [],
  };

  queryLocations = (query : string) => {
    // Store the latest query here to avoid out of order async responses.
    this.waitingForQuery = query;
    this.setState({ loading: true });
    const url = `${API_URL}?key=${API_KEY}&input=${query}&limit=7`;

    // Check if results are cached before making query.
    const cached = this.queryCache[url];
    if (cached) {
      this.setState({ loading: false, results: cached, error: '' });
      return;
    }

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      // Only bother with this response if this query matches the latest one we are waiting for
      if (responseJson.status === 'OK' && (query === this.waitingForQuery)) {
        this.queryCache[url] = responseJson.predictions;
        this.setState({ loading: false, results: responseJson.predictions, error: '' });
      } else {
        this.setState({ loading: false, error: responseJson.error_message });
      }
    });
  }

  // Debounce query function to make sure its only executed a single time,
  // either at the very beginning of a series of calls. I.e if the user is typing quickly
  // wait for them to finish before issuing query.
  debouncedQueryLocations =  debounce(500, this.queryLocations);

  // Triggers query predictably after a certain delay. This is done to prevent
  // excessive or repeated calling of query function.
  throttledQueryLocations = throttle(500, this.queryLocations);

  handleInputChange = (text: string) => {
    this.setState({ query: text },
        () => {
          let query = this.state.query;
          if (query && query.length > 2) {
            // Use throttle for initial or short queries to make search results feel responsive.
            // For longer queries switch to debounce.
            if (query.length < 5) {
              this.throttledQueryLocations(query);
            } else {
              this.debouncedQueryLocations(query);
            }
          }
        },
    );
  }

  render() {
    const { loading, results } = this.state;
    return (
        <SearchComponent
          results={ results }
          loading={ loading }
          handleInputChange={ this.handleInputChange }
        />
    );
  }
}
