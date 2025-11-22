import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Roteador from './roteador.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Roteador />
  </StrictMode>,
)
