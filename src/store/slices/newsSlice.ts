import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchBy: '' }

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        updateSearchValue: (state, action) => {
            state.searchBy = action.payload;
        }
    }
});

export const { updateSearchValue } = articlesSlice.actions;
export default articlesSlice.reducer;