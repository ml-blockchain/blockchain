const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'web',
  entry: {
    web: ['./src/apps/app.js'],
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
  externals: [nodeExternals()]
};
