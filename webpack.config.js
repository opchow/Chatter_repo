var path = require("path");
module.exports = {
	entry: {
		app: ["./app/script.js"]
	},
	mode:'development',
	output: {
		path: path.resolve(__dirname, "."),
		publicPath: "public/",
		filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
        ],
    },
};