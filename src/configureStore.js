/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import createSagaMiddleware, { END } from 'redux-saga'
import createReducer from './reducers'
import { combineReducers } from 'redux-immutable'
import { mergeDeep } from 'immutable'

const sagaMiddleware = createSagaMiddleware()

function createMiddlewares ({ isServer }) {
  let middlewares = [
    sagaMiddleware
  ]

  return middlewares
}

export default function configureStore (initialState = {}, ctx) {
  const { isServer } = ctx
  // const middlewares = [sagaMiddleware]
  const middlewares = createMiddlewares({ isServer })
  const enhancers = [applyMiddleware(...middlewares)]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {} // Reducer registry
  store.injectedSagas = {} // Saga registry

  // store.runSaga = () => {
  //   // Avoid running twice
  //   if (store.saga) return;
  //   store.saga = sagaMiddleware.run(rootSaga);
  // };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  }

  store.execRunSagas = (isServer, saga) => {
    store.saga = sagaMiddleware.run(saga);
  }

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    // store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  // store.runSaga();

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}
