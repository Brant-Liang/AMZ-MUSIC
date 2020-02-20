import { request } from './request'

export function getBanners(type) {
  return request({
    url: '/banner',
    params:{
      type
    }
  })
}

export function getSongList(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}
export function getNewSong() {
  return request({
    url: '/personalized/newsong'
  })
}
export class SongsList {
  constructor() {

  }
}