import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loginUrl = 'http://127.0.0.1:3000/login';

const initialState = {
  name: '',
  email: '',
  Authorization: localStorage.getItem('Authorization') || '',
  isAdmin: false,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const data = await response.json();
    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => ({
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        Authorization: action.payload.Authorization,
        isAdmin: action.payload.isAdmin,
      }))
      .addCase(loginUser.rejected, (state) => ({
        ...state,
        name: '',
        email: '',
        Authorization: '',
        isAdmin: false,
      }));
  },
});

export default authSlice.reducer;
