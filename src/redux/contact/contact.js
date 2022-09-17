import { createSlice } from '@reduxjs/toolkit';

export const contact = createSlice({
  name: 'contact',
  initialState: {
    // items: [],
    filter: '',
  },
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContacts, removeContacts, filterContacts } = contact.actions;
