import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// State management: 
import { authSlice } from './store'
const {reducer: authReducer} = authSlice
import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
import {
  // FLUSH,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REHYDRATE,
  persistStore,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = { key: 'root', storage, version: 1 }
const persistedReducer = persistReducer(persistConfig, authReducer)
// Store definition.
const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true
      }
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
