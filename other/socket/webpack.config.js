const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
	target: 'node',
	entry: {
		server: ['./server.js'],
		client: ['@babel/polyfill','./client.js'],
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
		new WebpackShellPlugin({onBuildExit:['node dist/server.js']})
	],
};
