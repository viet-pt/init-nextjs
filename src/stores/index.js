import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const expireReducer = require('redux-persist-expire');
const day = 86400;

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whitelist: ['authorizedReducer'],
  transforms: [
    expireReducer('authorizedReducer', {
      expireSeconds: 7 * day,
      autoExpire: true,
    }),
  ],
};

let store;

function initStore(initialState) {
  const presistedReducer = persistReducer(persistConfig, rootReducer);
  return createStore(
    presistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  const persistor = persistStore(store);
  return { store, persistor };
}
