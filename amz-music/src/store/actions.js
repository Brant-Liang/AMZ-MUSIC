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
      if(!state.songListIds.includes(state.songDesc.id)){
        state.songList = [{
          id: state.songDesc.id,
          currentMusic: state.songDesc.currentMusic,
          name: state.songDesc.name,
          artist: state.songDesc.artist,
          pic: state.songDesc.pic,
          lyric: state.songDesc.lyric
        }, ...state.songList]
      }
      for (let i = 0; i < state.songList.length; i++) {
        if(!state.songListIds.includes(state.songList[i].id))
          state.songListIds = [state.songList[i].id, ...state.songListIds]
      }
      // state.songListIds = state.songListIds.reduce((prev, curv) => {
      //   return prev.includes(curv) ? prev : [...prev, curv]
      // }, [])
      console.log(state.songListIds)
      // let temp = {}
      // state.songList = state.songList.reduce((prev, curv) => {
      //   if (!temp[curv.id]) {
      //     temp[curv.id] = true
      //     prev.push(curv)
      //   }
      //   return prev
      // },[])
    })
  }
}