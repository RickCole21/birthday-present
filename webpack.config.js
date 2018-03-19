const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    // print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清除dist文件夹中的旧文件
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }), // 生成html文件
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),  // 热更新模块
    new UglifyJSPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};