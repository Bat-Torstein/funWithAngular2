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
    }
};
