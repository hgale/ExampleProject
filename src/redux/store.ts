import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'src/redux/reducers';

export default function configureStore() {
  const appReducers = (state: any, action: any) => {
    return rootReducer(state, action);
  };

  let middleware = [ thunk ];
  const enhancers = compose(
    applyMiddleware(...middleware),
  );
  let store = createStore(appReducers, enhancers);
  return store;
}
