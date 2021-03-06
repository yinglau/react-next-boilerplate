/**
 * SecondPage saga
 * author: winson
 * email: 501285598@qq.com
 */

// import { call, put, select, takeLatest, takeEvery } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import {
  DEFAULT
} from './constants'

function * defaultSaga (action) {
  try {
    yield () => {}
    console.log('run saga action.type', action.type)
  } catch (e) {
    console.log('run saga error')
  }
}

export default function * saga () {
  yield takeEvery(DEFAULT, defaultSaga)
}
