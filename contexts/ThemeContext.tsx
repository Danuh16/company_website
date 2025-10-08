'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

type Theme = 'light' | 'dark'
type Language = 'en' | 'am'

interface ThemeContextType {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
  setLanguage: (lang: Language) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedLang = localStorage.getItem('language') as Language
    if (savedTheme) setTheme(savedTheme)
    if (savedLang) setLanguageState(savedLang)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
    }
  }, [language, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'am' : 'en')
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  // Create Material-UI theme based on current theme mode
  const muiTheme = createTheme({
    palette: {
      mode: theme,
      primary: {
        main: '#2187FF',
      },
      secondary: {
        main: '#4CAF50',
      },
      background: {
        default: theme === 'light' ? '#f8fafc' : '#121212',
        paper: theme === 'light' ? '#ffffff' : '#1e1e1e',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  })

  if (!mounted) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: 'linear-gradient(135deg, #87CEEB20, #4CAF5020)',
          gap: '24px',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            border: '3px solid #2187FF',
            borderTop: '3px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        <div
          style={{
            background: 'linear-gradient(45deg, #2187FF, #4CAF50)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '1.25rem',
            fontWeight: 'bold',
          }}
        >
          Loading...
        </div>
      </div>
    )
  }

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      language, 
      toggleTheme, 
      toggleLanguage,
      setLanguage 
    }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}