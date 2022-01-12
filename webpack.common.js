const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
			"os": require.resolve("os-browserify/browser"),
			"https": require.resolve("https-browserify"),
			"url": false,
			"http": require.resolve("stream-http"),
			"crypto": require.resolve("crypto-browserify"),
			"assert": false,
			"stream": require.resolve("stream-browserify")
		},
		alias: {
			views: path.resolve(__dirname, 'src/views'),
			resources: path.resolve(__dirname, 'src/resources'),
			controllers: path.resolve(__dirname, 'src/controllers'),
			types: path.resolve(__dirname, 'src/types'),
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
			template: './src/index.html'
		}),
	],
};
