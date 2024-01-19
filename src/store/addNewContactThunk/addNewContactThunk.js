import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContactApi } from 'fetch/fetch';

export const addNewContactThunk = createAsyncThunk(
  'contacts/addNewContacts',
  async (body, { rejectWithValue }) => {
    try {
      return await addNewContactApi(body);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
