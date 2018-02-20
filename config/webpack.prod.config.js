var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, '../web/dist')
var APP_DIR = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    index: APP_DIR + '/index.web.js'
  },

  devtool: "source-map",

  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },

  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(APP_DIR, 'web/index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
    new CopyWebpackPlugin([
      { from: APP_DIR + '/src/assets/images', to: BUILD_DIR + '/assets/images' }
    ]),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader?name=/assets/images/[name].[ext]'
        ],
      },

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        }),
      },

      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader?includePaths[]='+ path.resolve(__dirname, '../node_modules') +
          '&includePaths[]='+ path.resolve(__dirname, '../src/assets/styles')]
        })
      },

      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}