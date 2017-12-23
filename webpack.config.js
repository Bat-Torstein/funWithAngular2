var webpack = require('webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" }
        ]
    },
    plugins: [
		new MinifyPlugin({}, {})
    ]
};

