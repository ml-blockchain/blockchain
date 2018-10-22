const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  target: 'node',
  entry: {
    app: ['@babel/polyfill','./src/apps/app.js'],
    generateBlock: ['@babel/polyfill','./src/apps/generateBlock.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new WebpackShellPlugin({
      onBuildStart: ['echo "Webpack Start"'],
      onBuildExit: ['node ./dist/app.js']
    })
  ]
};
