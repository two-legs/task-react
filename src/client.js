/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createStore from './store';

import App from './containers/App/App';

const initialState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;
const store = createStore(initialState);

ReactDOM.hydrate((
  <AppContainer>
    <App store={store} />
  </AppContainer>
), document.getElementById('root'));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    const NextApp = require('./containers/App/App');
    ReactDOM.render(
      <AppContainer>
        <App store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}