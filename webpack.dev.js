const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js', //[contenthash]
		path: path.join(__dirname, 'dist'),
		publicPath: '/'
	},
	devServer: {
		compress: false,
		historyApiFallback: {
			index: '/index.html',
		},
		host: 'localhost',
		port: 8085,
		hot: true,
		client: {
			overlay: false,
		},
		open:{
			target: ['http://localhost:8085/'],
		},
	},
	plugins: [
		new webpack.DefinePlugin({
			__NODE_ENV__: JSON.stringify('development')
		}),
	]
});
