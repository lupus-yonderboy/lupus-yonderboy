import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducers } from './reducers';
// import * as serviceWorker from './serviceWorker';

import App from './App';

const rootElement = document.getElementById('root');
const store = createStore(reducers);

ReactDOM.render(
  <App store={store} />,
  rootElement
);

document.querySelector('body').style = 'margin: 0;';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
