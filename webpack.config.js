var path = require('path');

let webpackLoaderOptions = {
  query: {
    mozjpeg: {
      progressive: true
    },
    gifsicle: {
      interlaced: true
    },
    optipng: {
      optimizationLevel: 7
    }
  }
};

let fileLoaderOptions = {
  query: {
    name: 'asset/[name].[ext]'
  }
};

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: [path.resolve(__dirname, "node_modules")]
      }, {
        test: /\.kiss$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(jpe?g|png|gif|svg)c$/i,
        use: [
          {
            loader: 'file-loader',
            options: fileLoaderOptions
          }, {
            loader: 'image-webpack-loader',
            options: webpackLoaderOptions
          }
        ]
      }
    ]
  }
}