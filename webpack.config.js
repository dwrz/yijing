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
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public/'),
  },
};

/*
{ test: /\.css$/, loader: 'style-loader!css-loader' },

    test: /\.css$/,
        use: [{
            
        }, {
            loader: 'css-loader',
            options: {
                modules: true,
            },
        }, {
            loader: 'postcss-loader',
        }],

*/
