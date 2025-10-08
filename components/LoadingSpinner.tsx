'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'

interface LoadingSpinnerProps {
  message?: string
}

const LoadingSpinner = ({ message = "Loading..." }: LoadingSpinnerProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #87CEEB20, #4CAF5020)',
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 60,
          border: '3px solid #87CEEB',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <Typography 
        variant="h6" 
        className="gradient-text"
        sx={{ fontWeight: 'bold' }}
      >
        {message}
      </Typography>
    </Box>
  )
}

export default LoadingSpinner