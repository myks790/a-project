const path = require('path');
const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.shared.config.js');
const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/server'),
  },
  externals: [nodeExternals({allowlist: [/normalize.css/]})],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "ignore-loader",
        ],
      },
    ],
  },
};

module.exports = merge(sharedConfig, config);