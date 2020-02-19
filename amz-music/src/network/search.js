import { request } from './request'

export function getHotSearch () {
  return request({
    url: '/search/hot/detail'
  })
}