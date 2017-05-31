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
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './client/bundle.js'
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
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
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