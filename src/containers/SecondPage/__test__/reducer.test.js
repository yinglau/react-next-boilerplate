/**
 * SecondPage reducer test
 * author: winson
 * email: 501285598@qq.com
 */

import secondPageReducer, { initialState } from '../reducer'
import { fromJS } from 'immutable'
import { DEFAULT } from '../constants'

describe('test secondPage reducer', () => {
  it('should return initialState', () => {
    expect(secondPageReducer(undefined, {})).toEqual(initialState)
  })

  it('state.title should equal `myname`', () => {
    const state = fromJS({
      defaultState: 'myname'
    })
    expect(secondPageReducer(undefined, {type: DEFAULT, defaultState: 'myname'})).toEqual(state)
  })
})
