/* eslint-disable global-require, no-console */
import express from 'express';
import serverRender from './ssr';

export default function (parameters) {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.static('public'));

  app.get('*', serverRender(parameters.chunks()));

  app.listen(port, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
  });
}
