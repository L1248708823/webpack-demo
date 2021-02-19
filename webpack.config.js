const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // 要不要压缩编译过的代码
  mode: 'development',
  module:{
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, 'sass-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                "autoprefixer"
              ]
            }
          }
        }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({template: './src/template.html'})],
}