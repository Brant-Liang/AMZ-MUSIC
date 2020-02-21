module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'views': '@/views',
        'store': '@/store',
        'assets': '@/assets',
        'network': '@/network',
        'common': '@/common'
      }
    }
  }
}