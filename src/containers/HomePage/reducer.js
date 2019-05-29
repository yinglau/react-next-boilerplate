import { fromJS } from 'immutable'
import {
  GET_NEWS,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAIL,
  GET_ARTS,
  GET_ARTS_SUCCESS,
  GET_ARTS_FAIL
} from './actions'

const initialState = fromJS({
  homeNews: {
    isRequest: false,
    error: null,
    data: []
  },
  HomeArts: {
    isRequest: false,
    error: null,
    data: []
  }
})

function homeReducer (state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return state
        .setIn(['homeNews', 'isRequest'], true)
    case GET_NEWS_SUCCESS:
      return state
        .setIn(['homeNews', 'isRequest'], false)
        .setIn(['homeNews', 'data'], action.data)
    case GET_NEWS_FAIL:
      return state
        .setIn(['homeNews', 'isRequest'], false)
        .setIn(['homeNews', 'error'], action.error)
    case GET_ARTS:
      return state
        .setIn(['HomeArts', 'isRequest'], true)
    case GET_ARTS_SUCCESS:
      return state
        .setIn(['HomeArts', 'isRequest'], false)
        .setIn(['HomeArts', 'data'], action.data)
    case GET_ARTS_FAIL:
      return state
        .setIn(['HomeArts', 'isRequest'], false)
        .setIn(['HomeArts', 'error'], action.error)
    default:
      return state
  }
}

export default homeReducer
