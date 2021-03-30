const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');

const devMode = process.env.NODE_ENV === "development"
const devServerPort = 8080
const publicPath = `http://localhost:${devServerPort}/scripts`

const config = {
  target: 'web',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/client'),
    publicPath: publicPath
  },
  devServer: {
    port: devServerPort,
    publicPath: publicPath,
    liveReload : true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: devMode,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};

module.exports = merge(sharedConfig, config);