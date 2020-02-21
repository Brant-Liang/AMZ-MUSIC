import { request } from './request'

export function getHotSearch () {
  return request({
    url: '/search/hot/detail'
  })
}

export function getSuggest(keywords, limit, offset, type) {
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      offset,
      type
    }
  })
}