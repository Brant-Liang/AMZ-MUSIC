import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  isShowMenu: false,
  isShowSearch: false,
  searchKeywords: '',
  searchHistory: ['毛不易', '周杰伦'],
  songDesc: {
    id: null,
    currentMusic: null,
    name: '',
    artist: '',
    pic: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    lyric: ''
  },
  songList: [
  ],
  songListIds: [],
  searchList: [],
  isShowAudio: false,
  curTime: 0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
