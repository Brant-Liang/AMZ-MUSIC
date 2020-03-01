import { getMusicUrl, getSongDetail, getLyric } from 'network/audio'
export default {
  getMusic({commit, state}, payLoad) {
    commit('getMusicUrl', payLoad)
    let p1 = getMusicUrl(state.songDesc.id).then(res => {
      state.songDesc.currentMusic = res.data[0].url
    })
    let p2 =getSongDetail(state.songDesc.id).then(res => {
      state.songDesc.name = res.songs[0].name
      state.songDesc.artist = res.songs[0].ar[0].name
      state.songDesc.pic = res.songs[0].al.picUrl
    })
    let p3 = getLyric(state.songDesc.id).then(res => {
      state.songDesc.lyric = res.lrc.lyric
    })
    Promise.all([p1, p2, p3]).then(() => {
      console.log(state.songList.includes(state.songDesc));
      if(!state.songList.includes(state.songDesc)){
        state.songList = [{
          id: state.songDesc.id,
          name: state.songDesc.name,
          artist: state.songDesc.artist
        }, ...state.songList]
      }
      let temp = {}
      state.songList = state.songList.reduce((prev, curv) => {
        if (!temp[curv.id]) {
          temp[curv.id] = true
          prev.push(curv)
        }
        return prev
      },[])
    
    })
  }
}