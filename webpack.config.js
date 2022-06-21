const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		port: 9001,
	},
	resolve: {
		extensions: ['.js', '.vue', '.json', '.scss'],
		alias: {
		}
	},
	module: {
		rules: [
			// {
			// 	test: /\.s[ac]ss$/i,
			// 	use: [
			// 		// Creates `style` nodes from JS strings
			// 		"style-loader",
			// 		// Translates CSS into CommonJS
			// 		"css-loader",
			// 		// Compiles Sass to CSS
			// 		"sass-loader",
			// 	],
			// },
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: "file-loader"
			}
		]
	},
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Output Management',
			template: 'src/index.html'
		})
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/'
	}
};