const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prodMode = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: !prodMode && 'source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './js/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: prodMode
    ? [
        new UglifyJsPlugin({
          sourceMap: true
        })
      ]
    : []
};
