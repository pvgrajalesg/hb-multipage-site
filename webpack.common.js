const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.pug/,
        use: ['pug-loader']
      },
      {
        enforce: 'pre',
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: 'sasslint'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './bundle.css'
    }),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      title: 'Production'
    })
  ]
}
