const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    //指定费入口chunk的名称
    chunkFilename: '[name].[hunkhash].js',
    //指定文件存放路径
    path: path.resolve(__dirname, 'dist');
  }
};