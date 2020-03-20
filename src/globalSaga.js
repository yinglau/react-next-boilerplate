import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects'

import homeSaga from 'containers/HomePage/saga'
import secondSaga from 'containers/SecondPage/saga'

export {
  homeSaga,
  secondSaga
}

export default function* rootSaga () {
  yield all([
    call(homeSaga),
    call(secondSaga)
  ])
}
