var webpack = require('webpack');

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
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};
