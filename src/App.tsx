import {ThemeProvider} from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { defaultTheme } from './components/styles/themes/default'

export function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </ThemeProvider>
    </>
  ) 
}
