import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filter: '',
  },
  reducers: {
    filteredContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
