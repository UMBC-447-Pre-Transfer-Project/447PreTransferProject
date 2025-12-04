import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('login/',
  async(request, thunkAPI) => {
    const { username, password } = request
    const config = {
      headers: {
        'Content-Type': 'application/json',
        username,
        password
      }
    }
    await axios.put('http://localhost:8080/auth/login', null, config)
      .then(res => res.data)
      .catch(error => console.warn(error))
  }
)

export const signup = createAsyncThunk('signup/',
  async(request, thunkAPI) => {
    const { username, password } = request
    const config = {
      headers: {
        'Content-Type': 'application/json',
        username,
        password
      }
    }
    await axios.post('http://localhost:8080/auth/signup', null, config)
      .then(res => res.status)
      .catch(error => console.warn(error))
  }
)


export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userIdentifier: '',
  },
  extraReducers(builder) {
    builder
    .addCase(login.pending, state => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false
      state.fulfilled = true
      state.userIdentifier = action.payload
    })
    .addCase(login.rejected, state => {
      state.rejected = true;
    })
  }
})


export default loginSlice.reducer