const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const SassLintPlugin = require('sasslint-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader?sourceMap'])
      },
      {
        test: /\.pug/,
        use: ['pug-loader']
      },
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
  },

  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
    // new SassLintPlugin()
  ]
}
