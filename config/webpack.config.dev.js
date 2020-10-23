const commonConfig = require('./webpack.config.common')
const { merge } = require('webpack-merge')
module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 80
  }
})