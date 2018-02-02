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
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
        	use:[
        	  { loader: 'css-loader', options: { minimize: true }},
        	  { loader: 'sass-loader?sourceMap'}
        	]
        })
      },
      {
        test: /\.pug/,
        use: ['pug-loader']
      },
      {
        test: /\s[a|c]ss$/,
        exclude: /node_modules/,
        loader: 'sasslint'
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