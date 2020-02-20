import { request } from './request'

export function getHotSearch () {
  return request({
    url: '/search/hot/detail'
  })
}

export function getSuggest(keywords) {
  return request({
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}