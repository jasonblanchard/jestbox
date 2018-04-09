import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          'node_modules'
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  }
}
