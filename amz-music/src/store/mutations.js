import { getSuggest } from 'network/search'
import { debounce } from 'common/utils'
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
  },
  // 点击热搜输入对应歌名
  inputTheWord(state, word) {
    state.searchKeywords = word
  },
  searchListData(state, products) {
    debounce(getSuggest(products).then(res => {
      console.log(res);
      state.searchList = res.result.song
    }), 1000)
  }
}