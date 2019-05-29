/**
 * SecondPage reducer
 * author: winson
 * email: 501285598@qq.com
 */

import { fromJS } from 'immutable'
import {
  DEFAULT
} from './constants'

export const initialState = fromJS({
  defaultState: 'default state'
})

function secondPageReducer (state = initialState, action) {
  switch (action.type) {
    case DEFAULT:
      return state.set('defaultState', action.defaultState)
    default:
      return state
  }
}

export default secondPageReducer
