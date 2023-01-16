import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import newsReducer from './slices/newsSlice';

export const store = configureStore({
  reducer: newsReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
});