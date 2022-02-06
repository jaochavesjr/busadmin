import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/login';
import drivers from './slices/drivers';

const reducer = {
  auth,
  drivers,
};

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
