const path = require('path');

module.exports = {
  output: { path: path.join(__dirname, 'dist'), filename: 'index.bundle.js' },
  devServer: { port: 3000, watchContentBase: true },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
};
