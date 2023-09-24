module.exports = {
  devServer: {
      proxy: { // 다른 서버로 보낼 수 있게 하는 객체
          '/api': {
              target: 'http://localhost:8080', // /api로 오는 모든 요청 target으로 경로 우회
          }
      }
  }
}