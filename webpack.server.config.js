const path = require('path');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/server'),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(sharedConfig, config);