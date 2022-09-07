import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cart } from '../reducers/cart';

export const store = configureStore({ reducer: combineReducers({ cart })});