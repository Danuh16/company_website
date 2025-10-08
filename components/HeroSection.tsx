'use client'

import React, { useState, useEffect } from 'react'
import {
  Container,
  Typography,
  Button,
  Box,
  useTheme,
  IconButton,
} from '@mui/material'
import { ArrowForward as NextIcon, ArrowBack as PrevIcon } from '@mui/icons-material'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/translations'

const HeroSection = () => {
  const { language } = useCustomTheme()
  const muiTheme = useTheme()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slide data with emoji icons
  const slides = [
    {
      icon: '🚀',
    },
    {
      icon: '💻',
    },
    {
      icon: '📱',
    },
    {
      icon: '☁️',
    },
    {
      icon: '🔒',
    },
    {
      icon: '🤖',
    }
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Box
      id="home"
      sx={{
        textAlign: 'center',
        py: 8,
        px: 3,
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid',
        borderColor: 'divider',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Manual Slider - Full Width Behind Text with Increased Visibility */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(135deg, rgba(33, 135, 255, 0.15) 0%, rgba(76, 175, 80, 0.1) 100%)`,
        }}
      >
        {/* Current Slide Background - Increased Opacity and Cover Effect */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.25, // Increased from 0.1 to 0.25
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              fontSize: '6rem', // Slightly reduced for better proportion
              color: '#2187FF',
              padding: 3,
              width: '100%',
              maxWidth: '1200px',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ 
              fontSize: '8rem', // Reduced from 10rem to 8rem
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))', // Enhanced shadow
            }}>
              {slides[currentSlide].icon}
            </Box>
          </Box>
        </Box>

        {/* Navigation Controls - Smaller arrows and dots */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '30px', // Moved up slightly
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 2, // Reduced gap
            zIndex: 5,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '50px',
            padding: '8px 16px',
          }}
        >
          <IconButton
            onClick={prevSlide}
            sx={{
              backgroundColor: 'rgba(33, 135, 255, 0.9)',
              color: 'white',
              width: 50, // Reduced from 70 to 50
              height: 50, // Reduced from 70 to 50
              '&:hover': {
                backgroundColor: '#1a75e0',
                transform: 'scale(1.1)',
                boxShadow: '0 6px 20px rgba(33, 135, 255, 0.4)',
              },
              transition: 'all 0.3s ease',
              boxShadow: '0 3px 15px rgba(33, 135, 255, 0.3)',
            }}
          >
            <PrevIcon sx={{ fontSize: '1.8rem' }} /> {/* Reduced from 2.5rem */}
          </IconButton>

          {/* Slide Indicators - Smaller dots */}
          <Box sx={{ display: 'flex', gap: 1.5 }}> {/* Reduced gap */}
            {slides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 10, // Reduced from 16 to 10
                  height: 10, // Reduced from 16 to 10
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? '#2187FF' : 'rgba(33, 135, 255, 0.4)', // Increased inactive dot opacity
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#2187FF',
                    transform: 'scale(1.3)', // Slightly reduced scale
                  },
                }}
              />
            ))}
          </Box>

          <IconButton
            onClick={nextSlide}
            sx={{
              backgroundColor: 'rgba(33, 135, 255, 0.9)',
              color: 'white',
              width: 50, // Reduced from 70 to 50
              height: 50, // Reduced from 70 to 50
              '&:hover': {
                backgroundColor: '#1a75e0',
                transform: 'scale(1.1)',
                boxShadow: '0 6px 20px rgba(33, 135, 255, 0.4)',
              },
              transition: 'all 0.3s ease',
              boxShadow: '0 3px 15px rgba(33, 135, 255, 0.3)',
            }}
          >
            <NextIcon sx={{ fontSize: '1.8rem' }} /> {/* Reduced from 2.5rem */}
          </IconButton>
        </Box>
      </Box>

      {/* Main Content - Above the slider */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          fontWeight="bold"
          sx={{ 
            fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            color: '#2187FF',
            mb: 3,
            textShadow: '2px 2px 8px rgba(0,0,0,0.2)', // Enhanced shadow for better readability
          }}
        >
          {t.welcome}
        </Typography>
        <Typography 
          variant="h4" 
          component="p" 
          gutterBottom 
          sx={{ 
            mb: 4, 
            color: 'text.secondary',
            fontSize: { xs: '1.2rem', md: '1.8rem', lg: '2.2rem' },
            fontWeight: 300,
            textShadow: '1px 1px 4px rgba(0,0,0,0.1)', // Added shadow for better readability
          }}
        >
          {t.tagline}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 6, 
            maxWidth: '800px', 
            margin: '0 auto',
            color: 'text.secondary',
            lineHeight: 1.7,
            fontSize: { xs: '1rem', md: '1.2rem' },
            fontWeight: 400,
            textShadow: '1px 1px 3px rgba(0,0,0,0.1)', // Added shadow for better readability
          }}
        >
          {t.description}
        </Typography>
        {/* <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button
            variant="contained"
            size="large"
            endIcon={<NextIcon sx={{ color: 'white' }} />}
            sx={{
              backgroundColor: '#2187FF',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1a75e0',
                transform: 'translateY(-3px)',
                boxShadow: '0 12px 30px rgba(33, 135, 255, 0.4)',
              },
              transition: 'all 0.2s ease',
              fontSize: { xs: '1rem', md: '1.2rem' },
              px: 6,
              py: 2,
              borderRadius: 3,
              fontWeight: 'bold',
              boxShadow: '0 8px 25px rgba(33, 135, 255, 0.3)',
            }}
          >
            {t.getStarted}
          </Button>
        </Box> */}
      </Container>
    </Box>
  )
}

export default HeroSection