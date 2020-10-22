const commonConfig = require('./webpack.config.common')
const { merge } = require('webpack-merge')
module.exports = merge(commonConfig, {
  devServer: {
    contentBase: './dist',
    port: 80
  }
})