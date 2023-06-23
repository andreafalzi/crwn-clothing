import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//root-reducer

//How to create your how middleware using a curry function

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type: ', action.type);
  console.log('payload: ', action.payload);
  console.log('currentState: ', store.getState());
  //here is were the middleware move the action to the next operation in the line
  next(action);

  console.log('next state: ', store.getState());
};

// Set up a config key is the scope, storage is the name, blacklist is what we don't want include in it(user has been included because we wnat to avoid any conflict with firebaseDB)
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Hide logger from production ENV, filter Boolean is necessary to avoid falsy behave and app failing
const middleWares = [process.env.NODE_ENV !== 'production' && loggerMiddleware].filter(Boolean);

//logger from Redux
// const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
