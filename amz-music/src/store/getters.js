export default {
  // 歌词数据切割
  splitLyric(state) {
      let lines = state.songDesc.lyric.split("\n")
      let lineArr = []
      let arr = []
      lines.forEach(item => {
          arr = item.match(/\[(\d+:.+?)\]/g)
          var start = 0
          for(let i in arr){
            start += arr[i].length; //计算歌词位置
          }
          var lyric = item.substring(start)
          for(let j in arr) {
            let time = arr[j].substring(1, arr[j].length-1)
            
            let timeArr = time.split(':')
            let minute = parseInt(timeArr[0])
            let second = Math.round(timeArr[1])
            lineArr.push({minute, second, lyric})
          }
        })
         lineArr.sort((a, b) => 
          (a.minute*60 + a.second) - (b.minute*60 + b.second)
        )
      return lineArr
  },
  curSongIndex(state) {
    return state.songListIds.indexOf(state.songDesc.id) 
  }
}