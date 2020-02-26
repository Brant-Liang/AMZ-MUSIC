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
  currentId: null,
  currentMusic: null,
  songDesc: {
    name: '',
    artist: '',
    pic: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    lyric: ''
  },
  songList: [
    {

    },
  ],
  searchList: [],
  isShowAudio: false,
  currentTime: 0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
