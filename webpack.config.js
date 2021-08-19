const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  watch: true,
  entry: './index.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    }]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.json' ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './H5P.OERQuiz/'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**.json',
          to: '[name][ext]'
        },
        {
          from: 'H5P.OERQuiz',
          to: '../../../oer-dev/repos/h5p-oer-quiz'
        },
        {
          from: 'src/css',
          to: './css/'
        },
        {
          from: 'src/icon.svg',
          to: '[name][ext]'
        }
      ]
    })
  ]
};
