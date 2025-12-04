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
    const { id } = request
    request._id = id
    return axios.put(`http://localhost:8080/api/student`, request, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.data)
    .catch(error => thunkAPI.rejectWithValue(error.response?.data || 'Request failed')
    )
  }
)

export const deleteStudent = createAsyncThunk('student/deleteStudent',
  async(request, thunkAPI) => {
    const { id } = request
    return axios.put(`http://localhost:8080/api/student/delete`, request, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        id
      }
    }).then(res => console.warn(res.data))
    .catch(error => console.warn(error))
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
    .addCase(insertStudent.pending, state => {
      state.loading = true
    })
    .addCase(insertStudent.fulfilled, (state, action) => {
      state.loading = false
      state.fulfilled = true
      state.students = action.payload
    })
    .addCase(insertStudent.rejected, state => {
      state.rejected = true;
    })
    .addCase(deleteStudent.pending, state => {
      state.loading = true
    })
    .addCase(deleteStudent.fulfilled, (state, action) => {
      state.loading = false
      state.fulfilled = true
    })
    .addCase(deleteStudent.rejected, state => {
      state.rejected = true;
    })
  }
})


export default studentSlice.reducer