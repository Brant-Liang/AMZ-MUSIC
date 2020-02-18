import { request } from './request'

export function getSongList(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}
export function getBanners(type) {
  return request({
    url: '/banner',
    params:{
      type
    }
  })
}
export class SongsList {
  constructor() {

  }
}