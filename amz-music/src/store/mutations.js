
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
  // 添加历史记录
  addHistory(state, payLoad) {
    state.searchHistory = new Set([payLoad.name, ...state.searchHistory])
  },
  // 删除历史记录
  deleteAll(state) {
    state.searchHistory = []
  },
  getMusicUrl(state, payLoad) {
    state.songDesc.id = payLoad.id
    this.commit('addHistory',
    { 
      name: payLoad.name
    })
  },
  showAudio(state) {
    state.isShowAudio = true
  },
  getCurrentTime(state, payLoad) {
    state.curTime = payLoad
  },
  addSongList(state, payLoad) {
    state.songList.push(payLoad)
    console.log(state.songList);
  }
}