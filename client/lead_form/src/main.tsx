import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.scss'
import { ThemeProvider } from '@emotion/react'
import theme from './theme';
import { FormProvider } from './context/formContext'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <FormProvider>
        <CssBaseline />
        <App />
      </FormProvider>
    </ThemeProvider>
  </StrictMode>,
)
