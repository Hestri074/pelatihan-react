import counterReducer from './CounterSlice';
import { configureStore } from '@reduxjs/toolkit';

// BUat sotre global

// gunakan configureStore dari RTK
export const store = configureStore({
  reducer: counterReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;