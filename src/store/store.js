import { compose, createStore, applyMiddleware } from 'redux';
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

const middleWares = [loggerMiddleware];

//logger from Redux
// const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
