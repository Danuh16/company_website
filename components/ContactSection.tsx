'use client'

import React from 'react'
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  useTheme,
} from '@mui/material'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/translations'

const ContactSection = () => {
  const { language } = useCustomTheme()
  const muiTheme = useTheme()
  const t = translations[language]

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'background.default', width: '100%' }}>
      <Container maxWidth="xl">
        <Typography 
          variant="h2" 
          component="h2" 
          textAlign="center" 
          gutterBottom
          sx={{ 
            mb: 2,
            color: '#2187FF',
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          {t.contactTitle}
        </Typography>
        
        <Typography 
          variant="h4" 
          textAlign="center" 
          color="text.secondary" 
          sx={{ mb: 8, fontSize: { xs: '1.2rem', md: '1.5rem' } }}
        >
          {t.contactDescription}
        </Typography>

        {/* Full Width Centered Container */}
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Box sx={{ maxWidth: '1200px', width: '100%' }}>
            {/* Two Cards in One Row - Centered */}
            <Grid container spacing={6} sx={{ alignItems: 'stretch', justifyContent: 'center' }}>
              {/* Send Us Message Card */}
              <Grid item xs={12} lg={5}>
                <Card
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 5 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#2187FF', mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
                      Send us a Message
                    </Typography>
                    <form>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          variant="outlined"
                          required
                          size="medium"
                        />
                        <TextField
                          fullWidth
                          label="Email Address"
                          variant="outlined"
                          type="email"
                          required
                          size="medium"
                        />
                        <TextField
                          fullWidth
                          label="Subject"
                          variant="outlined"
                          required
                          size="medium"
                        />
                        <TextField
                          fullWidth
                          label="Your Message"
                          variant="outlined"
                          multiline
                          rows={6}
                          required
                          size="medium"
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{
                            backgroundColor: '#2187FF',
                            color: 'white',
                            py: 2,
                            fontSize: '1.1rem',
                            '&:hover': {
                              backgroundColor: '#1a75e0',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 12px 30px rgba(33, 135, 255, 0.4)',
                            },
                            transition: 'all 0.3s ease',
                            borderRadius: 2,
                            mt: 2,
                          }}
                        >
                          Send Message
                        </Button>
                      </Box>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
              
              {/* Contact Information Card */}
              <Grid item xs={12} lg={5}>
                <Card
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '2px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 5 }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#2187FF', mb: 4, fontWeight: 'bold', textAlign: 'center' }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      {[
                        { 
                          icon: '📍', 
                          title: 'Our Office', 
                          content: '123 Business Street\nDowntown District\nCity, State 12345\nUnited States' 
                        },
                        { 
                          icon: '📞', 
                          title: 'Phone Numbers', 
                          content: 'Main: +1 (555) 123-4567\nSupport: +1 (555) 123-4568\nSales: +1 (555) 123-4569' 
                        },
                        { 
                          icon: '✉️', 
                          title: 'Email Addresses', 
                          content: 'General: info@company.com\nSupport: support@company.com\nSales: sales@company.com' 
                        },
                        { 
                          icon: '🕒', 
                          title: 'Business Hours', 
                          content: 'Monday - Friday: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: Emergency Support Only' 
                        }
                      ].map((item, index) => (
                        <Box key={index} sx={{ mb: 4, display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                          <Box sx={{ fontSize: '2rem', color: '#2187FF', mt: 0.5, flexShrink: 0 }}>
                            {item.icon}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h5" sx={{ color: '#2187FF', mb: 1, fontWeight: 'bold', fontSize: '1.3rem' }}>
                              {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line', lineHeight: 1.6, fontSize: '1.05rem' }}>
                              {item.content}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Additional Contact Info - Full Width */}
            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Card
                sx={{
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  p: 4,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h4" gutterBottom sx={{ color: '#2187FF', mb: 3, fontWeight: 'bold' }}>
                    Get in Touch Today
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                    Ready to start your next project? Contact us today and let's discuss how we can help 
                    transform your ideas into reality. Our team is ready to provide you with the best 
                    solutions for your business needs.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: '#2187FF',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#1a75e0',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(33, 135, 255, 0.3)',
                        },
                        transition: 'all 0.3s ease',
                        px: 5,
                        py: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      Schedule a Call
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: '#2187FF',
                        color: '#2187FF',
                        '&:hover': {
                          backgroundColor: '#2187FF',
                          color: 'white',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(33, 135, 255, 0.2)',
                        },
                        transition: 'all 0.3s ease',
                        px: 5,
                        py: 1.5,
                        fontSize: '1.1rem',
                      }}
                    >
                      Request Quote
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactSection