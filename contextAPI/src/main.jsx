import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { SenhaContextProvider } from './context/SenhaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SenhaContextProvider>
      <App />
    </SenhaContextProvider>
  </StrictMode>
)
