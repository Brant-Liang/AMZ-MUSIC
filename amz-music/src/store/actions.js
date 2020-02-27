import { getMusicUrl, getSongDetail, getLyric } from 'network/audio'
export default {
  getMusic({commit, state}, payLoad) {
    commit('getMusicUrl', payLoad)
    getMusicUrl(state.songList.id).then(res => {
      state.songDesc.currentMusic = res.data[0].url
    })
    getSongDetail(state.songList.id).then(res => {
      state.songDesc.name = res.songs[0].name
      state.songDesc.artist = res.songs[0].ar[0].name
      state.songDesc.pic = res.songs[0].al.picUrl
    })
    getLyric(state.songList.id).then(res => {
      state.songDesc.lyric = res.lrc.lyric
    })
    // state.songList.push({
    //   name: state.
    // })
  }
}