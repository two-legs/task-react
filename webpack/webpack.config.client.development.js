import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfiguration from './webpack.config.client';
import appConfig from '../src/config';

const { host, port } = appConfig.webpack.server;
const baseConfig = baseConfiguration({
  development: true,
  css_bundle: true,
});

const config = {
  devtool: 'cheap-module-eval-source-map',
  performance: { hints: false },

  entry: {
    main: [
      `webpack-hot-middleware/client?path=${host}:${port}/__webpack_hmr`,
      'react-hot-loader/patch',
      baseConfig.entry.main,
    ],
  },

  output: {
    publicPath: `${host}:${port}${baseConfig.output.publicPath}`,
  },

  module: {},

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};

export default merge(baseConfig, config);
