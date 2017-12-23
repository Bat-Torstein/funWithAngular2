var webpack = require('webpack');

module.exports = {
    entry: "./app/main.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
		    { 	
				test: /\.es6$/, 
				exclude: /node_modules/, 
				loader: "babel-loader", 
				query: { presets: ["es2015"] }
			}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};

