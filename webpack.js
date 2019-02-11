/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');


// it's just test project for myself, no such thing as production here
// that's why it's only development settings here

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
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
    ],
  },
};
