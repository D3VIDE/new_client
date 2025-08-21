import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './style.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import Header from './components/Header.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Header/>
    <Hello />
  </StrictMode>,
)
