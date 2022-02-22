const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    target: "web",
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js", //[contenthash]
        path: path.join(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        fallback: {
            "buffer": require.resolve("buffer"),
            "os": require.resolve("os-browserify/browser"),
            "https": require.resolve("https-browserify"),
            "url": false,
            "process": require.resolve("process/browser"),
            "http": require.resolve("stream-http"),
            "crypto": require.resolve("crypto-browserify"),
            "assert": false,
            "stream": require.resolve("stream-browserify"),
        },
        alias: {
            pages: path.resolve(__dirname, "src/pages"),
            views: path.resolve(__dirname, "src/views"),
            resources: path.resolve(__dirname, "src/resources"),
            controllers: path.resolve(__dirname, "src/controllers"),
            types: path.resolve(__dirname, "src/types"),
            hooks: path.resolve(__dirname, "src/hooks"),
            providers: path.resolve(__dirname, "src/providers"),
            utils: path.resolve(__dirname, "src/utils"),
        },
    },
    module: {
        rules: [
            {
                test: /^emojis.json$/,
                exclude: /node_modules/,
                use: ["json-loader"]
            },
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
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.NODE_DEBUG": JSON.stringify("development")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
};
