import { getMusicUrl, getSongDetail, getLyric } from 'network/audio'
export default {
  getMusic({commit, state}, payLoad) {
    commit('getMusicUrl', payLoad)
    getMusicUrl(state.currentId).then(res => {
      state.currentMusic = res.data[0].url
    })
    getSongDetail(state.currentId).then(res => {
      state.songDesc.name = res.songs[0].name
      state.songDesc.artist = res.songs[0].ar[0].name
      state.songDesc.pic = res.songs[0].al.picUrl
    })
    getLyric(state.currentId).then(res => {
      state.songDesc.lyric = res.lrc.lyric
    })
  }
}