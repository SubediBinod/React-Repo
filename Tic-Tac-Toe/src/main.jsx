//main.jsx


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Board from './Board'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Board/>
  </StrictMode>,
)
