'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  Button,
  IconButton,
} from '@mui/material'
import { ArrowForward as NextIcon, ArrowBack as PrevIcon } from '@mui/icons-material'
import {
  Code as WebIcon,
  PhoneIphone as MobileIcon,
  Cloud as CloudIcon,
  Support as SupportIcon,
  School as TrainingIcon,
  BusinessCenter as ConsultingIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  Storage as StorageIcon,
  Apps as AppsIcon,
  DesignServices as DesignIcon,
  Engineering as EngineeringIcon
} from '@mui/icons-material'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/translations'

const ServicesSection = () => {
  const { language } = useCustomTheme()
  const muiTheme = useTheme()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      icon: <WebIcon sx={{ fontSize: 48 }} />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance and user experience.',
    },
    {
      icon: <MobileIcon sx={{ fontSize: 48 }} />,
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications for iOS and Android with native-like performance and intuitive interfaces.',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 48 }} />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions tailored for businesses of all sizes and requirements.',
    },
    {
      icon: <ConsultingIcon sx={{ fontSize: 48 }} />,
      title: 'Consulting',
      description: 'Expert consulting services to help your business grow, optimize processes, and achieve strategic goals effectively.',
    },
    {
      icon: <SupportIcon sx={{ fontSize: 48 }} />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services ensuring your systems run smoothly at all times.',
    },
    {
      icon: <TrainingIcon sx={{ fontSize: 48 }} />,
      title: 'Training',
      description: 'Comprehensive training programs designed to empower your team with the latest technologies and best practices.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      title: 'Cyber Security',
      description: 'Advanced security solutions to protect your digital assets and ensure data privacy compliance.',
    },
    {
      icon: <AnalyticsIcon sx={{ fontSize: 48 }} />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    },
    {
      icon: <StorageIcon sx={{ fontSize: 48 }} />,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and management services for optimal performance.',
    },
    {
      icon: <AppsIcon sx={{ fontSize: 48 }} />,
      title: 'API Development',
      description: 'Robust and scalable API solutions to connect your applications and services seamlessly.',
    },
    {
      icon: <DesignIcon sx={{ fontSize: 48 }} />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interface designs that enhance user experience and engagement.',
    },
    {
      icon: <EngineeringIcon sx={{ fontSize: 48 }} />,
      title: 'DevOps',
      description: 'Streamlined development and deployment processes with continuous integration and delivery.',
    },
  ]

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [services.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  // Scroll to current slide
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 380 + 16; // card width + gap
      sliderRef.current.scrollTo({
        left: currentSlide * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [currentSlide])

  return (
    <Box id="services" sx={{ py: 10, backgroundColor: 'background.paper', width: '100%' }}>
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
          {t.servicesTitle}
        </Typography>
        
        {/* Single Row Sliding Services with Auto-play */}
        <Box sx={{ position: 'relative', mb: 4 }}>
          {/* Sliding Cards Container */}
          <Box
            ref={sliderRef}
            sx={{
              display: 'flex',
              gap: 4,
              overflowX: 'hidden',
              scrollBehavior: 'smooth',
              pb: 2,
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: 380,
                  height: 280,
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(33, 135, 255, 0.2)',
                    borderColor: '#2187FF',
                  },
                  backgroundColor: 'background.default',
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  textAlign: 'center',
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <CardContent sx={{ p: '0 !important' }}>
                  <Box
                    sx={{
                      color: '#2187FF',
                      mb: 3,
                      '& svg': {
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#2187FF',
                      mb: 2,
                      fontSize: '1.4rem'
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6, fontSize: '0.95rem' }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Navigation Controls - Like Hero Section */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              mt: 4,
            }}
          >
            <IconButton
              onClick={prevSlide}
              sx={{
                backgroundColor: 'rgba(33, 135, 255, 0.9)',
                color: 'white',
                width: 50,
                height: 50,
                '&:hover': {
                  backgroundColor: '#1a75e0',
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 20px rgba(33, 135, 255, 0.4)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 15px rgba(33, 135, 255, 0.3)',
              }}
            >
              <PrevIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>

            {/* Service Indicators - Dots Below Cards */}
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 1.5,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                padding: '8px 16px',
              }}
            >
              {services.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: currentSlide === index ? '#2187FF' : 'rgba(33, 135, 255, 0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#2187FF',
                      transform: 'scale(1.3)',
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
                width: 50,
                height: 50,
                '&:hover': {
                  backgroundColor: '#1a75e0',
                  transform: 'scale(1.1)',
                  boxShadow: '0 6px 20px rgba(33, 135, 255, 0.4)',
                },
                transition: 'all 0.3s ease',
                boxShadow: '0 3px 15px rgba(33, 135, 255, 0.3)',
              }}
            >
              <NextIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          </Box>
        </Box>

        {/* Additional Info Card */}
        <Card
          sx={{
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
            },
            backgroundColor: 'background.default',
            border: '2px solid',
            borderColor: 'divider',
            borderRadius: 3,
            p: 5,
            textAlign: 'center',
          }}
        >
          <CardContent sx={{ p: '0 !important' }}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                color: '#2187FF',
                fontWeight: 'bold',
                mb: 3
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                lineHeight: 1.7,
                mb: 4,
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              Our comprehensive suite of services is designed to meet all your digital needs. 
              From cutting-edge web development to robust cloud solutions, we have the expertise 
              to take your business to the next level.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default ServicesSection