import React from 'react';
import ReactDOM from 'react-dom';
import root from './reducers/root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import './index.css';

const rootStore = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
