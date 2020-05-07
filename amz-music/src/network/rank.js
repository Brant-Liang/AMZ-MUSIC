import { request } from './request'

export function getRank (idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}