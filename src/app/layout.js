'use client'

import { createTheme } from '@mui/material'
import './globals.css'
import { Raleway } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'

const raleway = Raleway({ subsets: ['latin'] })


const theme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
