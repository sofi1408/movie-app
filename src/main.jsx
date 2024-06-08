import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/movieReducer.js'
import App from './App.jsx'
import './index.css'

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
