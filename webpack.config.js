const path = require('path');

module.exports = {
  entry: './client/src/app.js',
    module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public/'),
  },
};
