import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllStudents = createAsyncThunk('student/getAllStudents',
  async(request, thunkAPI) => {
    return await axios.get(`http://localhost:8080/api/student`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.data)
    .catch(error => thunkAPI.rejectWithValue(error.response?.data || 'Request failed')
    )
  }
)

export const insertStudent = createAsyncThunk('student/insertStudent',
  async(request, thunkAPI) => {
    return await axios.put(`http://localhost:8080/api/student`, request, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.data)
    .catch(error => thunkAPI.rejectWithValue(error.response?.data || 'Request failed')
    )
  }
)

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: []
  },
  extraReducers(builder) {
    builder
    .addCase(getAllStudents.pending, state => {
      state.loading = true
    })
    .addCase(getAllStudents.fulfilled, (state, action) => {
      state.loading = false
      state.fulfilled = true
      state.students = action.payload
    })
    .addCase(getAllStudents.rejected, state => {
      state.rejected = true;
    })
  }
})


export default studentSlice.reducer