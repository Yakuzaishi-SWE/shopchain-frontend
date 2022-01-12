const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
	target: 'web',
	entry: './src/index.tsx',
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js', //[contenthash]
		path: path.join(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		fallback: {
			
		},
		alias: {
			pages: path.resolve(__dirname, 'src/pages'),
			views: path.resolve(__dirname, 'src/views'),
			store: path.resolve(__dirname, 'src/store'),
			resources: path.resolve(__dirname, 'src/resources'),
			controllers: path.resolve(__dirname, 'src/controllers'),
			types: path.resolve(__dirname, 'src/types'),
			components: path.resolve(__dirname, 'src/components'),
			hooks: path.resolve(__dirname, 'src/hooks'),
			providers: path.resolve(__dirname, 'src/providers'),
			contexts: path.resolve(__dirname, 'src/contexts')
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ["ts-loader"],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: './src/favicon.ico'
		}),
	],
};
