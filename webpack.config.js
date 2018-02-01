const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/modules/MainNav.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test:/\.(s*)css$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader?sourceMap']),
        }]
    },

    plugins: [
        new ExtractTextPlugin({ // define where to save the file
          filename: 'bundle.css'
        }),
        new HtmlWebpackPlugin({
      	  template: 'src/index.html'
    	})
    ]
};