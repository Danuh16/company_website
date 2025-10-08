'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  useTheme,
} from '@mui/material'
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/translations'

const Footer = () => {
  const { language } = useCustomTheme()
const muiTheme = useTheme()
const t = translations[language]
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'var(--footer-bg)',
        color: 'white',
        py: 8,
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{
                color: '#2187FF',
                fontWeight: 'bold',
                mb: 3,
                fontSize: '1.8rem'
              }}
            >
              Company Logo
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '1.05rem' }}>
              Providing exceptional services with quality and excellence. 
              We are committed to delivering the best solutions for your business needs 
              and helping you achieve your digital transformation goals.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: 'white',
                    backgroundColor: `linear-gradient(135deg, rgba(33, 135, 255, 0.15) 0%, rgba(76, 175, 80, 0.1) 100%)`,
                    '&:hover': {
                      backgroundColor: '#2187FF',
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 20px rgba(33, 135, 255, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                    width: 50,
                    height: 50,
                  }}
                >
                  <Icon sx={{ fontSize: 24 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ color: '#2187FF', fontWeight: 'bold', mb: 3, fontSize: '1.4rem' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { name: 'Home', section: 'home' },
                { name: 'About Us', section: 'about' },
                { name: 'Our Services', section: 'services' },
                { name: 'Contact Us', section: 'contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  component="button"
                  onClick={() => scrollToSection(item.section)}
                  sx={{
                    textAlign: 'left',
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    '&:hover': {
                      color: '#2187FF',
                      textDecoration: 'underline',
                      transform: 'translateX(5px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ color: '#2187FF', fontWeight: 'bold', mb: 3, fontSize: '1.4rem' }}>
              Contact Info
            </Typography>
            <Box sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem' }}>
              <Typography sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <span style={{ color: '#2187FF', fontSize: '1.2rem' }}>📍</span>
                <span>123 Business Street, Downtown District, City 12345</span>
              </Typography>
              <Typography sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ color: '#2187FF', fontSize: '1.2rem' }}>📞</span>
                <span>+1 (555) 123-4567</span>
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ color: '#2187FF', fontSize: '1.2rem' }}>✉️</span>
                <span>info@company.com</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            mt: 6,
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>
            © {currentYear} Your Company Name. All rights reserved. | 
            Designed with ❤️ for excellence and innovation
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer