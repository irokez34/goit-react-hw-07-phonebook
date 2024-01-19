import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk } from 'store/getContactsThunk/getContactsThunk';

const initialState = {
  phoneBook: {
    items: [],
    isLoading: false,
    error: null,
  },
};
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
const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.phoneBook.items = payload;
      })
      .addMatcher(({ type }) => {
        type.endsWith('/pending'), handlePending;
      })
      .addMatcher(({ type }) => {
        type.endsWith('/rejected'), handleRejected;
      })
      .addMatcher(({ type }) => {
        type.endsWith('/fulfilled'), handleFulfilled;
      });
  },
  reducers: {
    addContact: (state, action) => {
      state.phoneBook.items.push(action.payload);
    },

    removeContact(state, action) {
      state.phoneBook.items = state.phoneBook.items.filter(
        el => el.id !== action.payload
      );
    },
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;

export const { removeContact, addContact } = phoneBookSlice.actions;
