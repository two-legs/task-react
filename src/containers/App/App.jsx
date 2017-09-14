import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from '../../routes';

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line
};

export default App;
