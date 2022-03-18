
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
    ? '/vue-shopping-cart/' // test20200915 為 repo 名稱
    : '/'
}