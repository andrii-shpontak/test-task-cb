import { createSlice } from '@reduxjs/toolkit';
import { MainState } from '../../models/models';

const initialState: MainState = { searchBy: '', articlesData: [] }

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    updateSearchValue: (state, action) => {
      state.searchBy = action.payload;
    },
    getArticlesData: (state, action) => {
      state.articlesData = action.payload;
    },
  }
});

export const { updateSearchValue, getArticlesData } = articlesSlice.actions;
export default articlesSlice.reducer;