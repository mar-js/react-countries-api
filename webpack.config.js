const PATH = require('path')
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const HTML_MINIMIZER_WEBPACK_PLUGIN = require('html-minimizer-webpack-plugin')
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin')
const CSS_MINIMIZER_WEBPACK_PLUGIN = require('css-minimizer-webpack-plugin')
const JAVASCRIPT_MINIMIZAR_WEBPACK_PLUGIN = require('terser-webpack-plugin')

module.exports = {
  entry: '/src/index.js',
  output: {
    path: PATH.resolve(__dirname, 'dist/'),
    filename: 'assets/js/[name].bundle.min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      '@': PATH.resolve(__dirname, 'src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css|.scss$/i,
        use: [
          {
            loader: MINI_CSS_EXTRACT_PLUGIN.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [ require('autoprefixer') ]
                }
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js|.jsx$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      title: 'Countries',
      template: PATH.join(__dirname, '/public/index.html'),
      filename: 'index.html',
      minify: true
    }),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: 'assets/css/[name].min.css'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HTML_MINIMIZER_WEBPACK_PLUGIN(),
      new CSS_MINIMIZER_WEBPACK_PLUGIN(),
      new JAVASCRIPT_MINIMIZAR_WEBPACK_PLUGIN()
    ]
  },
  devServer: {
    contentBase: PATH.join(__dirname, 'dist'),
    watchContentBase: true,
    compress: true,
    port: 8080,
    open: true
  }
}
