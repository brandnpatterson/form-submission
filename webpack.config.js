const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      './src/js/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'src/js/dist'),
    filename: 'bundle.js',
    publicPath: './public/js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};
