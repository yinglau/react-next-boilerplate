/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable'
import globalReducer from './globalReducer'

/* Import all reducer start*/
import HomePage from './containers/HomePage/reducer'
import SecondPage from './containers/SecondPage/reducer'
/* Import all reducer end*/

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer (injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,

    /* inject module reducer */
    homePage: HomePage,
    secondPage: SecondPage
  })

  // Wrap the root reducer and return a new root reducer with router state
  return rootReducer
}
