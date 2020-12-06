const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { HOST = '0.0.0.0', PORT = '8000' } = process.env;

module.exports = {

  mode: 'development',
  devtool: 'source-map',

  entry: './src/index.tsx',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['react-svg-loader'],
      },
      {
        test: /\.jpg$/,
        use: ['file-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],

  devServer: {
    host: HOST,
    port: Number(PORT),
    hot: true,
  },

};
