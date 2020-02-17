import { request } from './request'

export function getSongList(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}