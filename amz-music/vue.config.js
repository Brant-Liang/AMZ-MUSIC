modules.exports = {
  configWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'views': '@/views',
        'store': '@/store',
        'assets': '@/assets'
      }
    }
  }
}