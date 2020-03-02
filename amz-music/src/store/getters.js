export default {
  // 歌词数据切割
  splitLyric(state) {
    let lines = state.songDesc.lyric.split("\n")
    let lineArr = []
    lines.forEach(item => {
      let index = item.indexOf(']')
      let time = item.substring(1, index)
      // let showTime = time.substring(0, 5)
      let timeArr = time.split(':')
      let minute = parseInt(timeArr[0])
      let second = Math.round(timeArr[1])
      let lyric = item.substring(index + 1)
      lineArr = [...lineArr, {minute, second, lyric}]
    });
    return lineArr
  },
  curSongIndex(state) {
    return state.songListIds.indexOf(state.songDesc.id) 
  }
}