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
        py: { xs: 4, sm: 6, md: 8 },
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, sm: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{
                color: '#80ED99',
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '1.4rem', sm: '1.6rem' }
              }}
            >
              ARKI Environmental Services
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              Providing exceptional environmental services with quality and excellence. 
              We are committed to delivering the best solutions for your water management needs 
              and helping you achieve your environmental goals.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(128, 237, 153, 0.1)',
                    '&:hover': {
                      backgroundColor: '#80ED99',
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 20px rgba(128, 237, 153, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                    width: { xs: 40, sm: 50 },
                    height: { xs: 40, sm: 50 },
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                </IconButton>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ color: '#80ED99', fontWeight: 'bold', mb: 3, fontSize: { xs: '1.2rem', sm: '1.3rem' } }}>
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
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    '&:hover': {
                      color: '#80ED99',
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
            <Typography variant="h5" gutterBottom sx={{ color: '#80ED99', fontWeight: 'bold', mb: 3, fontSize: { xs: '1.2rem', sm: '1.3rem' } }}>
              Contact Info
            </Typography>
            <Box sx={{ color: 'rgba(255,255,255,0.8)', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              <Typography sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <span style={{ color: '#80ED99', fontSize: '1.1rem' }}>📍</span>
                <span>Addis Ababa, Lemi Kura Sub City<br />Wereda 10, Abuki Building<br />4th Floor</span>
              </Typography>
              <Typography sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ color: '#80ED99', fontSize: '1.1rem' }}>📞</span>
                <span>0977137713 / 0924311470</span>
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <span style={{ color: '#80ED99', fontSize: '1.1rem' }}>✉️</span>
                <span>arkienviromentalservices@gmail.com</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            mt: { xs: 4, sm: 6 },
            pt: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
            © {currentYear} ARKI Environmental Services plc. All rights reserved. | 
            Committed to environmental excellence and innovation
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer