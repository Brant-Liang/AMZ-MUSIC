export default {
  splitLyric(state) {
    let lines = state.songDesc.lyric.split("\n")
    let lineArr = []
    lines.forEach(item => {
      let index = item.indexOf(']')
      let time = item.substring(1, index)
      // let showTime = time.substring(0, 5)
      let timeArr = time.split(':')
      let playTime = timeArr[0]*60 + parseFloat(timeArr[1]) * 1000
      let lyric = item.substring(index + 1)
      lineArr = [...lineArr, {playTime, lyric}]
    });
    return lineArr
  }
}