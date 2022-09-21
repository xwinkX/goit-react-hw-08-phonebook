import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const isDublicate = ({ title, author }, books) => {
  const normalizedTitle = title.toLowerCase();
  const normalizedAuthor = author.toLowerCase();

  const result = books.find(item => {
    return (
      normalizedTitle === item.title.toLowerCase() &&
      normalizedAuthor === item.author.toLowerCase()
    );
  });

  return Boolean(result);
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        alert(`${data.name} is alredy exist`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      await api.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
