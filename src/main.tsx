import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { GlobalStyles } from './styles/globalStyles'

import { ThemeProvider } from './styles/themeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
)
