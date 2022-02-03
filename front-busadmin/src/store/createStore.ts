import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/login';

const reducer = {
  auth: auth,
};

const store = configureStore({
  reducer,
});

export default store;
