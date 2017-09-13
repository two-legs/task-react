import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanPlugin from 'clean-webpack-plugin';

import baseConfiguration from './webpack.config.client';

const baseConfig = baseConfiguration({ development: false });
const vendor = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'immutable',
  'redux-immutablejs',
  'react-router',
  'react-router-redux',
  'redux-connect',
  'react-hot-loader',
];


const config = {
  devtool: 'source-map',
  entry: { vendor },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity,
    }),

    new CleanPlugin(
      [path.relative(baseConfig.context, baseConfig.output.path)],
      { root: baseConfig.context },
    ),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};

export default merge(baseConfig, config);
