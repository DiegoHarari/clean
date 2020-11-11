import { Action, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk'

import rootReducer, { RootState } from './rootReducer';


const store = configureStore({
  reducer: rootReducer
});

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
export type AppDispatch = typeof store.dispatch;

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
};

export default store;