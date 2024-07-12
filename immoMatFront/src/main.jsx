import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { MaterielProvider } from './context/MaterielContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <MaterielProvider>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  </MaterielProvider>,
)
