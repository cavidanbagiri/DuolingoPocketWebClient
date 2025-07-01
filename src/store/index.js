
import { configureStore } from '@reduxjs/toolkit'
import messageBoxSlice from './message-store.js'
import authSlice from './auth-store.js'
import dashboardSlice from './dashboard-store.js'
import savedWordsSlice from './savedwords-store.js'

export const store = configureStore({
  reducer: {
    messageBoxSlice: messageBoxSlice,
    authSlice: authSlice,
    dashboardSlice: dashboardSlice,
    savedWordsSlice: savedWordsSlice,

  },
})