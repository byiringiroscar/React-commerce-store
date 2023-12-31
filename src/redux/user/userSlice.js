import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loginUrl = 'http://127.0.0.1:3000/login';

const initialState = {
  name: '',
  email: '',
  Authorization: localStorage.getItem('Authorization') || '',
  isAdmin: false,
};

const extractToken = (response) => {
  const authHeader = response.headers.get('authorization');
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.split(' ')[1];
  }
  return null;
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });
    if (!response.ok) {
      return { status: { code: 404, message: 'Credentials not match.' } };
    }
    const data = await response.json();
    const token = extractToken(response);
    console.log(token);
    if (token) {
      localStorage.setItem('Authorization', `Bearer ${token}`);
    }
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
