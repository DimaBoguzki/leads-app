import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import theme from './theme';
import { CssBaseline } from '@mui/material'
import './App.scss'

createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
