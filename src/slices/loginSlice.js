import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk('login/',
  async(request, thunkAPI) => {
    const { username, password } = request
    const config = {
      params: {
        username,
        password
      }
    }
    axios.get('/api/login/', null, config)
      .then(res => res.data)
      .catch(error => console.warn(error))
  }
)


export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userIdentifier: '',
  },
})

export default loginSlice.reducer