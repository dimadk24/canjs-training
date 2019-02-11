/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path');


// it's just test project for myself, no such thing as production here
// that's why it's only development settings here

const nodeModulesDir = path.resolve(__dirname, 'node_modules');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [nodeModulesDir],
    alias: {
      can: 'canjs/amd/can/',
    },
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    overlay: {
      error: true,
      warning: true,
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf|mp3)$/,
        use: 'file-loader',
      },
      {
        test: /\.stache/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};
