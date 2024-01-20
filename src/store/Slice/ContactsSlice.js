import { createSlice } from '@reduxjs/toolkit';
import {
  addNewContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'store/thunk/thunk';

const handlePending = state => {
  state.phoneBook.isLoading = true;
  state.phoneBook.error = '';
};
const handleRejected = (state, { payload }) => {
  state.phoneBook.isLoading = false;
  state.phoneBook.error = payload.message;
};
const handleFulfilled = state => {
  state.phoneBook.isLoading = false;
};
const initialState = {
  phoneBook: {
    items: [],
    isLoading: false,
    error: null,
  },
};
const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items = payload;
      })
      .addCase(addNewContactThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items = state.phoneBook.items.filter(
          el => el.id !== payload.id
        );
      })
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
      .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
