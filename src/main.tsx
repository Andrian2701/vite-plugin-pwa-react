import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import { UpdateAppDialog } from './update-app-dialog.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UpdateAppDialog />
    <App />
  </StrictMode>,
)
