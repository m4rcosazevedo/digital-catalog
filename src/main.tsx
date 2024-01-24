import React from 'react'
import '@/presentation/assets/styles/index.css'
import ReactDOM from 'react-dom/client'
import Router from './main/routes/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
