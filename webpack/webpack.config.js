import path from 'path';
import autoprefixer from 'autoprefixer';
import customProperties from 'postcss-custom-properties';
import atImport from 'postcss-import';

const rootFolder = path.resolve(__dirname, '..');

const config = {
  context: rootFolder,
  entry: {
    main: './src/client',
  },

  output: {
    path: path.resolve(rootFolder, './public/client'),
    publicPath: '/client/',
    filename: '[name].[hash].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },

      {
        test: /\.p?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[folder]_[local]_[hash:base64:4]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                atImport,
                customProperties,
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|ttf|png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 16384,
              name: 'assets/[hash:base64:10].[ext]',
            },
          },
        ],
      },
    ],
  },
};

export default config;
