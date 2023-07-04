const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
const common = require('./webpack.common');

const CleanPluginConfig = new CleanWebpackPlugin();

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [CleanPluginConfig],
});
