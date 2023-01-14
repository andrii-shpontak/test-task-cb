import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import articlesReducer from './newsSlice';
import { newsApi } from "./newsApi";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(newsApi.middleware)
});

// export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;