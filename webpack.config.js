const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      ActionsReducers: path.resolve(__dirname, 'src/ActionsReducers'),
      Components: path.resolve(__dirname, 'src/Components'),
      Pages: path.resolve(__dirname, 'src/Pages')
    }
  }
}
