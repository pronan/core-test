var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  externals: {
    // jquery: 'jQuery',
    // vue: 'Vue',
    // 'vue-resource': 'VueResource',
    // 'vue-router': 'VueRouter',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.common.js',
      'vuex$': 'vuex/dist/vuex.js',
      'vue-router$': 'vue-router/dist/vue-router.common.js',
      'vue-resource$': 'vue-resource/dist/vue-resource.common.js',
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  // module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
