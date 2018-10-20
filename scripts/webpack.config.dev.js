const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  target: 'node',
  entry: {
    app: ['./src/index.js']
  },
  module: {
    rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
    ]
  },
  externals: [nodeExternals()],
};
