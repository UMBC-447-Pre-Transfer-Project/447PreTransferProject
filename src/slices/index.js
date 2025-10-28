import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import transferStudentSlice from './transferStudentSlice'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    transferStudent: transferStudentSlice
  }
})