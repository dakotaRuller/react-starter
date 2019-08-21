import React from 'react';
import ReactDOM from 'react-dom';
import initializeState from '../src/redux/store';
import { Provider } from 'react-redux';
import App from "./App";

let store = initializeState();

ReactDOM.hydrate(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);