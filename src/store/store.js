import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './Slice/ContactsSlice';
import { filterReducer } from './Slice/FilterSlice';


const reducer = {
  contacts: phoneBookReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer: reducer });
