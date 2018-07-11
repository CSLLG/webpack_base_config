const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
	plugins: [
		new UglifyJSPlugin({}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
});