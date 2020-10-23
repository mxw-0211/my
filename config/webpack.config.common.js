const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    main: path.resolve('./src/index.js')
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: 'style'
          }
        }, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]',
            outputPath: 'imgs'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|otf|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts'
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src')
    },
    extensions: ['.vue', '.js', '.scss', '.css']
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new webpack.ProvidePlugin({
    //   'element': 'element-ui'
    // }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/index.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/](vue|vuex|vue-router)/
        },
        elementui: {
          test: /[\\/]node_modules[\\/](element)/
        }
      }
    }
  }
}