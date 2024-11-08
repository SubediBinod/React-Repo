import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ColorPicker from './ColorPicker.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorPicker />
  </StrictMode>,
)
