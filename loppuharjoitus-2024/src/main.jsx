import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="-main-content">
      <Header />
      <App />
    </div>
  </StrictMode>,
)
