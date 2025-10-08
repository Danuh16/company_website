'use client'

import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
} from '@mui/material'
import { 
  People as TeamIcon,
  Business as MissionIcon,
  Visibility as VisionIcon,
  TrendingUp as GrowthIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Code as CodeIcon,
  Cloud as CloudIcon
} from '@mui/icons-material'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/translations'

const AboutSection = () => {
  const { language } = useCustomTheme()
  const muiTheme = useTheme()
  const t = translations[language]

  const aboutCards = [
    {
      icon: <TeamIcon sx={{ fontSize: 48 }} />,
      title: 'Expert Team',
      description: 'Professional team with years of industry experience',
    },
    {
      icon: <MissionIcon sx={{ fontSize: 48 }} />,
      title: 'Our Mission',
      description: 'Delivering exceptional services that exceed expectations',
    },
    {
      icon: <VisionIcon sx={{ fontSize: 48 }} />,
      title: 'Our Vision',
      description: 'Leading innovation with quality and commitment',
    },
    {
      icon: <GrowthIcon sx={{ fontSize: 48 }} />,
      title: 'Continuous Growth',
      description: 'Always evolving with the latest technologies',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      title: 'Top Security',
      description: 'Robust security measures for your peace of mind',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 48 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for your business',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 48 }} />,
      title: 'Modern Tech',
      description: 'Using cutting-edge technologies and frameworks',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 48 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable solutions for businesses of all sizes',
    },
  ]

  // Duplicate the array to create seamless loop
  const slidingCards = [...aboutCards, ...aboutCards]

  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default', width: '100%' }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          gutterBottom
          sx={{ 
            mb: 8,
            color: '#2187FF',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          {t.aboutTitle}
        </Typography>
        
        {/* Full Width Sliding Cards Container */}
        <Box className="sliding-cards-container" sx={{ mb: 8, width: '100%' }}>
          <Box className="sliding-cards" sx={{ display: 'flex', gap: 4, width: 'max-content' }}>
            {slidingCards.map((card, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 300,
                  height: 250,
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.05)',
                    boxShadow: '0 20px 40px rgba(33, 135, 255, 0.2)',
                  },
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  textAlign: 'center',
                  p: 4,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <CardContent sx={{ p: '0 !important' }}>
                  <Box
                    sx={{
                      color: '#2187FF',
                      mb: 2,
                      '& svg': {
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2187FF',
                      mb: 1,
                      fontSize: '1.3rem'
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.5, fontSize: '0.9rem' }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Full Width Main About Content */}
        <Card
          sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
            },
            backgroundColor: 'background.paper',
            border: '2px solid',
            borderColor: 'divider',
            borderRadius: 3,
            p: 6,
            width: '100%',
          }}
        >
          <CardContent sx={{ p: '0 !important', textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ 
                color: '#2187FF',
                fontWeight: 'bold',
                mb: 4,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Why Choose Us?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                lineHeight: 1.8,
                mb: 4,
                fontSize: '1.2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {t.aboutDescription}
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                lineHeight: 1.8,
                fontSize: '1.2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              We are committed to delivering excellence in every project. Our team combines 
              technical expertise with creative solutions to help your business thrive in 
              the digital landscape. From initial concept to final deployment, we ensure 
              every detail meets the highest standards of quality and performance.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default AboutSection