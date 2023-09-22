module.exports = {
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:8080', // 경로 우회!
          }
      }
  }
}