# TypeScript Template App

```
This is an example application built using react-navigation, redux, redux-thunk and TypeScript.
``` 

# Project Structure

```
Structure goes here

ExampleProject/
App.tsx : Entry point, setups react-navigation stack navigator and wires up a redux provider.
src/components/
CountScreen.tsx  Count screen demos how to store a simple count in redux. 
SearchScreen.tsx Search screen demos how I would implement a search dialog.
WelcomeScreen.tsx Entrypoint screen.
LoadingIndicator.tsx  Loading indicator component.
PlaceComponent.tsx Presentational component used in FlatList.
SearchComponent.tsx  Presentational component for search results.
LoadingIndicator.test.tsx  Snapshot test.
PlaceComponent.test.tsx   Snapshot test.
SearchComponent.test.tsx  Snapshot test.            
src/redux/
actionTypes.ts  strings representing types of redux actions.
actions.ts redux actions implementation. Uses thunk.
store.ts setup and configures redux store.
src/redux/reducers/
count.ts  the reducer powering the count screen. 
index.ts  combines all reducers in this directory.
src/utils/
routes.ts list of all screens in the app. Used with navigation.
styles.ts colors, fonts, etc used throughout the app.

``` 

# Welcome Screen

```
First screen that gets displayed when the app starts. Shows a series of buttons that allow you to navigate to other demos
screens in the app.

``` 

![alt text](https://github.com/hgale/ExampleProject/blob/master/gifs/Welcome.png "Welcom screen")

# Count Screen

```
This screen demonstates storing and updating a count in redux. It's mainly a demo of how I structure my reducers, actions & actionTypes in a redux application.

``` 

![alt text](https://github.com/hgale/ExampleProject/blob/master/gifs/CountDemo.gif "Redux demo")


# Search Screen

```
This screen uses the the google places API to power a search box. It demos how I would do this using throttling, caching, debouncing. It's structure is broken into Presentational (UX, SearchComponent) and Container components (Business logic, SearchScreen).

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

``` 
![alt text](https://github.com/hgale/ExampleProject/blob/master/gifs/SearchDemo.gif  "Search demo")


# Installation Instructions
    
```

Install all iOS RN dependencies listed here under building projects with native code: 

https://facebook.github.io/react-native/docs/getting-started.html

Clone repo:

git@github.com:hgale/ExampleProject.git

run yarn install from inside ExampleProject directory

In order to use the search functionality you will need to register an API_KEY at:
https://developers.google.com/places/web-service/get-api-key

Then create avalid JSON file in: src/utils/apikeys.json

Put the key in this file like so: API_KEY : 'myapikeygoeshere'.

Note, apikeys.json is excluded by .gitignore.

from the ExampleProject directory, run: react-native run-ios.
``` 
