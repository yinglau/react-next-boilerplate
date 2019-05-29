export const GET_NEWS = 'HomePage/GET_NEWS'
export const GET_NEWS_SUCCESS = 'HomePage/GET_NEWS_SUCCESS'
export const GET_NEWS_FAIL = 'HomePage/GET_NEWS_FAIL'

export function getNews (payload) {
  return {
    type: GET_NEWS,
    payload
  }
}

export const GET_ARTS = 'HomePage/GET_ARTS'
export const GET_ARTS_SUCCESS = 'HomePage/GET_ARTS_SUCCESS'
export const GET_ARTS_FAIL = 'HomePage/GET_ARTS_FAIL'

export function getArts (payload) {
  return {
    type: GET_ARTS,
    payload
  }
}

