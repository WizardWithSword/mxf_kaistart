var path = require('path');
var rootPath = path.dirname(__dirname);
console.log('根目录')
console.log(rootPath)

// webpack.config.js
module.exports = {
  // entry point of our application
  entry: './src/js/index.js',
  // where to place the compiled bundle
  output: {
    path: './dist/js',
    filename: 'app.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      }
    ]
  }
}