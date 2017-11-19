/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './routes';
import createStore from './store';

function renderFullPage(html, assets, initialState) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Netflix Roulette</title>
          <link rel="stylesheet" href="${assets.styles.main}">
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="text/javascript">window.__PRELOADED_STATE__=${JSON.stringify(initialState)}</script>
        <script type="text/javascript" src="${assets.javascript.main}"></script>
      </body>
    </html>
  `;
}

function renderApp(assets) {
  return (req, res) => {
    const context = {};
    const initialState = { };
    const store = createStore();

    const html = ReactDOM.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>,
    );

    if (context.url) {
      res.writeHead(301, {
        Location: context.url,
      });
      res.end();
    } else {
      const branch = matchRoutes(routes, req.url);
      const promises = branch.map(({ route, match }) => {
        return route.component && route.component.fetch
          ? route.component.fetch(match, store.dispatch)
          : Promise.resolve(null);
      });

      Promise.all(promises).then(() => {
        res.send(renderFullPage(html, assets, store.getState()));
        console.log('RESOLVED');
      });
    }
  };
}

export default renderApp;
