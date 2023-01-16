import { combineReducers, configureStore, createReducer, getDefaultMiddleware } from "@reduxjs/toolkit";
import newsReducer from './slices/newsSlice'

const rootReducer = combineReducers({
  searchValue: newsReducer,
})

export const store = configureStore({
  reducer: newsReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })
});