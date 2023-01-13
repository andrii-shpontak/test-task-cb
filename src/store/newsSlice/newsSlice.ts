import { createSlice } from '@reduxjs/toolkit';

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {},
  reducers: {
    findBySearchValue: (state, action) => {
      state.searchBy = action.payload;
    }
  }
});

export const { findBySearchValue } = articlesSlice.actions;
export default articlesSlice.reducer;