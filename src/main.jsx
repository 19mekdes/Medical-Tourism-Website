// src/main.jsx  ← MUST LOOK LIKE THIS
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'          // ← MUST BE index.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)