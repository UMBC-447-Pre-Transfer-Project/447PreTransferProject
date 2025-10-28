import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import student from './studentSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    students: student
  }
})