
import path from 'path';

import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default
{
	entry: ["./src/index.tsx"],
	output: {path: path.resolve("build"), filename: "[name].[fullhash].js", clean: true},
	devServer: {port: 3000, allowedHosts: ['all'], historyApiFallback: true},
	resolve: {extensions: ['.js', '.jsx', '.tsx', '.ts']},
	plugins: [
		new HTMLWebpackPlugin({template: "./public/index.html"}),
		new webpack.ProvidePlugin({React: 'react'})
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader", "postcss-loader"]
		},{
			test: /\.(jpg|jpeg|png|svg|gif)$/,
			type: 'asset/resource'
		},{
			test: /\.[jt]sx?$/,
			exclude: /node-modules/,
			use: {
				loader: "babel-loader",
				options: {presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]}
			}
		}]
	}
}
