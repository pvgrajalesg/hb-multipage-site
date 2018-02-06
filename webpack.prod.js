const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {loader: 'css-loader', options: { minimize: true }},
            {loader: 'sass-loader?sourceMap'}
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
})
