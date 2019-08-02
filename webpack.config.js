module.exports = {
  mode: 'development',
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.mdx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.mdx?$/,
        use: [
          'babel-loader',
          '@mdx-js/loader'
        ],
      },
    ],
  },
}
