export default {
  menuShow(state) {
    state.isShowMenu = true
  },
  searchShow(state) {
    state.isShowSearch = true
  },
  backToHome(state) {
    state.isShowSearch = false
  }
}