import { get } from '../utils/request'

export const getNews = (data) => get('/topics', data)
export const getArts = (data) => get('/articles', '')
