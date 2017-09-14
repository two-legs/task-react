/* eslint-disable global-require, no-console */
import webpack from 'webpack';
import configuration from './webpack.config.client.development';

const appConfig = require('../src/config');

const { port } = appConfig.webpack.server;

const WebpackDevServer = require('webpack-dev-server');

// http://webpack.github.io/docs/webpack-dev-server.html
const devServerOptions = {
  quiet: false,
  noInfo: false,
  hot: true,

  publicPath: configuration.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  historyApiFallback: true,
};

const compiler = webpack(configuration);

new WebpackDevServer(compiler, devServerOptions)
  .listen(port, (error) => {
    if (error) {
      console.error(error.stack || error);
      throw error;
    }
    console.info('Webpack development server listening on port %s', port);
  });

