'use client'

import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { Translate } from '@mui/icons-material'
import { useTheme } from '@/contexts/ThemeContext'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useTheme()

  return (
    <Tooltip title={`Switch to ${language === 'en' ? 'Amharic' : 'English'}`}>
      <IconButton onClick={toggleLanguage} color="inherit">
        <Translate />
        <span style={{ marginLeft: '4px', fontSize: '12px', fontWeight: 'bold' }}>
          {language === 'en' ? 'EN' : 'AM'}
        </span>
      </IconButton>
    </Tooltip>
  )
}

export default LanguageSwitcher