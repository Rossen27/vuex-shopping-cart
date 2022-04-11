
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-shopping-cart/' // 此為 repo 名稱
    : '/'
}