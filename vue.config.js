const { resolve } = require('path')
module.exports = {
  lintOnSave: 'warning',
  chainWebpack: (config) => {
    // 设置别名 简化文件路径书写
    // .set('你要设置的别名名字',reslove(__dirname),'简化的实际路径')
    config.resolve.alias.set('img', resolve(__dirname, 'src/assets/img'))
      .set('public', resolve(__dirname, 'src/components/public'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.85.207:3000/',
        chageOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}