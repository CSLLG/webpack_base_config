const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
function resolve(dir){
  return path.join(__dirname, '..', dir);
};

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    //指定费入口chunk的名称
    chunkFilename: '[name].[hunkhash].js',
    //指定文件存放路径
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'ulr-loader', //和file-loader类似，但是可以把limit大小以下的图片转换成dataURI
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        options: {},
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin([resolve('dist')]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      minify: {
        removeComment: true,
        collapseWhitespace: true,
        removeAttrbuteQuotes: true
      }
    }),
  ]
};