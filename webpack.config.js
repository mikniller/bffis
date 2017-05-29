var path = require('path');


module.exports = {
  entry : './client/index.js',
  output: {
    path:path.resolve(__dirname,'build'),
    filename : './client/bundle.js'
  },
  module : {
    loaders : [
        {
          test : /\.(js|jsx)$/,
          loader : 'babel-loader',
          query : {
            presets : ['es2015','react']
          },
          exclude: [
              path.resolve(__dirname, "node_modules"),
          ],

        }

    ]
  }



}
