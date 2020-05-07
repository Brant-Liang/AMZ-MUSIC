<template>
  <div id="recommand">
    <swiper-banner 
      :banners="banners" 
      height="150px" 
      width="95%"
    />
    <func-bar>
      <func-item>
        <img slot="func-img" src="~assets/img/home/singer.svg" alt="">
        <span slot="func-title">歌手榜</span>
      </func-item>
      <func-item>
        <img slot="func-img" src="~assets/img/home/ranking.svg" alt="">
        <span slot="func-title" @click="toRank">排行榜</span>
      </func-item>
      <func-item>
        <img slot="func-img" src="~assets/img/home/song-list.svg" alt="">
        <span slot="func-title">歌单</span>
      </func-item>
      <func-item>
        <img slot="func-img" src="~assets/img/home/more.svg" alt="">
        <span slot="func-title">更多</span>
      </func-item>
    </func-bar>
    <rec-songs-list :songsList="songList"/>
    <rec-new-song :newSong="newSong"/>
  </div>
</template>

<script>
import SwiperBanner from 'components/common/swiper/Swiper'
import FuncBar from 'components/content/funcBar/FuncBar'
import FuncItem from 'components/content/funcBar/FuncItem'
import RecSongsList from './childComponents/SongsList'
import RecNewSong from './childComponents/newSong'

import { getBanners,getSongList,getNewSong } from 'network/recommand.js'
export default {
  name: 'Recommand',
  components: {
    FuncBar,
    FuncItem,
    RecSongsList,
    RecNewSong,
    SwiperBanner,
  },
   data() {
    return {
      banners: [],
      songList: [],
      limit: 6,
      type: 1,
      newSong: []
    }
  },
  created() {
    // 获取banner数据
    getBanners(this.type).then(res => {
      this.banners = res.banners
    })
    // 获取歌单数据
    getSongList(this.limit).then(res => {
      this.songList = res.result
    })
    // 获取推荐新歌
    getNewSong().then(res => {
      this.newSong = res.result
    })
  },
  methods: {
    toRank() {
     
    }
  },
}
</script>

<style scoped>
</style>