import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllStudents = createAsyncThunk('pre-transfer/getAllStudents',
  async(request, thunkAPI) => {
    const res = axios.get(`http://localhost:8080/api/pre-transfer`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        key: 'name'
      }
    })
    .then(res => res.data)
    .catch(error => thunkAPI.rejectWithValue(error.response?.data || 'Request failed')
    )
    return res
  }
)

const transferStudentSlice = createSlice({
  name: 'transfer students',
  initialState: {
    list: [null]
  },
  extraReducers(builder) {
    builder
    .addCase(getAllStudents.pending, state => {
      state.loading = true
    })
    .addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = false
      state.fulfilled = true
      state.list = action.payload
    })
    .addCase(getAllStudents.rejected, state => {
      state.rejected = true;
    })
  }
})


export default transferStudentSlice.reducer