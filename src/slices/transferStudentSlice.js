import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllStudents = createAsyncThunk('transfer-students/get-all',
  async(request, thunkAPI) => {
    axios.get('/api/transfer-students/get-all', request)
      .then(res => res.data)
      .catch(error => console.warn(error))
  }
)

const transferStudentSlice = createSlice({
  name: 'transfer students',
  initialState: {
    list: []
  },
  extraReducers(builder) {
    builder
    .addCase(getAllStudents.pending, state => {
      state.loading = true
    })
    .addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = false
      state.list = action.payload
    })
  }
})

export default transferStudentSlice.reducer