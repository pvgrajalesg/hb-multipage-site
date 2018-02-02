const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './public'
   },

   module: {
    rules: [
      {
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: 'sasslint'
      },
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          // Emit errors instead of warnings (default = false)
          error: false,
          // enable snazzy output (default = true)
          snazzy: true
          // other config options to be passed through to standard e.g.
          // parser: 'babel-eslint'
        }
      }
    ]
  }

 })