import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from './newsSlice/newsSlice';

const store = configureStore({
    reducer: articlesReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;