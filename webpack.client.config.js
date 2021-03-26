const path = require('path');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');

const clientPort = 8080;
const publicPath = `http://localhost:${clientPort}/scripts`

const config = {
  target: 'web',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/client'),
    publicPath: publicPath
  },
  devServer: {
    port: clientPort,
    publicPath: publicPath,
    liveReload : true
  }
};

module.exports = merge(sharedConfig, config);