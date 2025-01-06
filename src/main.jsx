import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/index.css';
import './components/css/header.css';
import './components/css/dock.css';
import './components/css/contact.css';
import './components/css/navbar.css';
import './components/css/loaders.css';
import './components/css/about.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
