const path = require('path');
const merge = require('webpack-merge').merge;
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const webpack = require('webpack');

module.exports = merge(common, {
	mode: 'production',
	entry: {
		public: './src/index.tsx',
	},
	output: {
		filename: '[name].[contenthash:8].js',
		chunkFilename: '[name].[contenthash:8].js', //[contenthash]
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new CompressionPlugin({
			deleteOriginalAssets: false,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__NODE_ENV__: JSON.stringify('production')
		}),
	],
	optimization: {
		runtimeChunk: {name:'runtime'},
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: (module, chunks) => {
						const allChunksNames = chunks.map((item) => item.name).join('-');
						return `vendor~${allChunksNames}`;
					},
					chunks: "all",
				},
				default: {
					test: /[\\/]src[\\/]/,
					name: (module, chunks, cacheGroupKey) => {
						const allChunksNames = chunks.map((item) => item.name).join('-');
						return `${allChunksNames}`;
					}
				},
			},
		},
		concatenateModules: true
	},
});
