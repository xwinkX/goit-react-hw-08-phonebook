import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      console.log(response);
      const { status, statusText } = response;
      console.log(data);
      const error = {
        status,
        message: statusText,
      };
      return rejectWithValue(error);
    }
  }
);
