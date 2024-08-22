import { configureStore } from '@reduxjs/toolkit'
import transactionreaduser from './data'
export const store = configureStore({
  reducer: {
     Data :  transactionreaduser
  },
})