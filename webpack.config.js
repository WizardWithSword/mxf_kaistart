var path = require('path');
var rootPath = path.dirname(__dirname);
console.log('根目录')
console.log(rootPath)
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')

// webpack.config.js
module.exports = {
  // entry point of our application
  entry: './src/js/index.js',
  // where to place the compiled bundle
  output: {
    path: './dist/',
    filename: 'app.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './dist/'
  },
  plugins: [
    // //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // //把入口文件里面的数组打包成verdors.js
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: './src/index.html',
      // path.resolve(rootPath, ),
      filename: 'index.html',
    })
  ],
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [{
      test: /\.html$/,
      loader: 'vue-html'
    }, {
      test: /\.vue$/, // a regex for matching all files that end in `.vue`
      loader: 'vue' // loader to use for matched files
    },{
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
}