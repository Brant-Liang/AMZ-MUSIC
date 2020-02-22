
export default {
  // 展示菜单
  menuShow(state) {
    state.isShowMenu = true
  },
  // 展示搜索栏
  searchShow(state) {
    state.isShowSearch = true
  },
  // 返回主页
  backToHome(state) {
    state.isShowSearch = false
    state.isShowAudio = false
  },
  // 点击热搜输入对应歌名
  inputTheWord(state, word) {
    state.searchKeywords = word
  },
  // 删除历史记录
  deleteAll(state) {
    state.searchHistory = []
  },
  showAudio(state) {
    state.isShowAudio = true
  }
}