/**
 * SecondPage selectors
 * author: winson
 * email: 501285598@qq.com
 */

import { createSelector } from 'reselect'

const selectSecondPage = (state) => state.get('secondPage')

export const getDefaultState = () => createSelector(
  selectSecondPage,
  state => state.get('defaultState')
)
