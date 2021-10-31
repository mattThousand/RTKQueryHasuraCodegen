import { createStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { api } from './src/queries/GetUsers.generated';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

const middlewares = [thunk, api.middleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
