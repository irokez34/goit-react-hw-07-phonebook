import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi } from 'fetch/fetch';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContactsApi();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
