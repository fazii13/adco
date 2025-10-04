import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./css/bootstrap.min.css"
import "./css/animate.min.css"
import "./css/odometer.css"
import "./css/style.css"
import "./css/responsive.css"
import './fontawsome/css/all.min.css'
import './fontawsome/css/fontawesome.min.css'
import './css/slick.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)