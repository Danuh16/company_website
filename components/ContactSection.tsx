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
  alpha,
} from '@mui/material'
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material'
import { useTheme as useCustomTheme } from '@/contexts/ThemeContext'
import { translations } from '@/lib/translations'

const ContactSection = () => {
  const { language } = useCustomTheme()
  const muiTheme = useTheme()
  const t = translations[language]

  const contactInfo = [
    {
      icon: <LocationIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
      title: 'Our Office',
      content: 'Addis Ababa, Lemi Kura Sub City\nWereda 10, Abuki Building\n4th Floor',
      color: '#2192FF'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
      title: 'Phone Numbers',
      content: '0977137713\n0924311470',
      color: '#57CC99'
    },
    {
      icon: <EmailIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
      title: 'Email Address',
      content: 'arkienviromentalservices@gmail.com',
      color: '#80ED99'
    },
    {
      icon: <TimeIcon sx={{ fontSize: { xs: 24, sm: 28 } }} />,
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed',
      color: '#2192FF'
    }
  ]

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: { xs: 6, sm: 8, md: 10 },
        background: `linear-gradient(135deg, ${alpha('#2192FF', 0.02)} 0%, ${alpha('#57CC99', 0.02)} 100%)`,
        position: 'relative',
        overflow: 'hidden',
        
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${alpha('#2192FF', 0.05)} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${alpha('#57CC99', 0.05)} 0%, transparent 50%)`,
          zIndex: 0,
        }}
      />

      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10 } }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #2192FF, #57CC99)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              mb: 2,
            }}
          >
            {t.contactTitle}
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ 
              maxWidth: '600px',
              margin: '0 auto',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
              lineHeight: 1.6,
            }}
          >
            Get in touch with us for professional environmental services and water management solutions.
          </Typography>
        </Box>

        {/* 2 Cards Side by Side - Equal Width */}
        <Grid container spacing={4} sx={{ width: '100%', margin: 0,alignItems: 'center' }}>
          {/* Contact Form Card - Left Side */}
          <Grid item xs={12} md={6} sx={{ width: '50%' }}>
            <Card
              sx={{
                height: '100%',
                minHeight: { xs: '500px', md: '600px' },
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                backdropFilter: 'blur(10px)',
                border: '2px solid',
                borderColor: alpha('#2192FF', 0.15),
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(33, 146, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 16px 48px rgba(33, 146, 255, 0.15)',
                  borderColor: alpha('#2192FF', 0.3),
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    color: '#2192FF',
                    fontWeight: 'bold',
                    mb: 4,
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <SendIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
                  Send us a Message
                </Typography>
                
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                  {/* Full Name - Full Width */}
                  <TextField
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    required
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#2192FF',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2192FF',
                        },
                      },
                    }}
                  />

                  {/* Email Address - Full Width */}
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    type="email"
                    required
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#2192FF',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2192FF',
                        },
                      },
                    }}
                  />

                  {/* Subject - Full Width */}
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    required
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#2192FF',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2192FF',
                        },
                      },
                    }}
                  />

                  {/* Message TextArea - Full Width and Taller */}
                  <TextField
                    fullWidth
                    label="Your Message"
                    variant="outlined"
                    multiline
                    rows={8}
                    required
                    size="medium"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#2192FF',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#2192FF',
                        },
                        alignItems: 'flex-start',
                        minHeight: '200px',
                      },
                      flex: 1,
                      '& .MuiInputBase-root': {
                        height: '100%',
                      },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      background: 'linear-gradient(135deg, #2192FF, #57CC99)',
                      color: 'white',
                      py: 2,
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                      fontWeight: 'bold',
                      borderRadius: 2,
                      mt: 3,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1a7ae6, #4aba87)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(33, 146, 255, 0.4)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Contact Information Card - Right Side */}
          <Grid item xs={12} md={6} sx={{ width: '47%' }}>
            <Card
              sx={{
                height: '100%',
                minHeight: { xs: '500px', md: '600px' },
                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                backdropFilter: 'blur(10px)',
                border: '2px solid',
                borderColor: alpha('#57CC99', 0.15),
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(87, 204, 153, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 16px 48px rgba(87, 204, 153, 0.15)',
                  borderColor: alpha('#57CC99', 0.3),
                },
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 }, height: '100%' }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    color: '#57CC99',
                    fontWeight: 'bold',
                    mb: 4,
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <ScheduleIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
                  Contact Information
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                  {contactInfo.map((item, index) => (
                    <Box 
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 3,
                        p: 3,
                        borderRadius: 3,
                        background: `linear-gradient(135deg, ${alpha(item.color, 0.05)} 0%, ${alpha(item.color, 0.02)} 100%)`,
                        border: `1px solid ${alpha(item.color, 0.1)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: `0 8px 24px ${alpha(item.color, 0.1)}`,
                          borderColor: alpha(item.color, 0.2),
                        },
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: { xs: 50, sm: 60 },
                          height: { xs: 50, sm: 60 },
                          borderRadius: 3,
                          background: `linear-gradient(135deg, ${alpha(item.color, 0.2)} 0%, ${alpha(item.color, 0.1)} 100%)`,
                          color: item.color,
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            color: item.color,
                            fontWeight: 'bold',
                            mb: 1,
                            fontSize: { xs: '1.1rem', sm: '1.2rem' },
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          color="text.secondary" 
                          sx={{ 
                            whiteSpace: 'pre-line', 
                            lineHeight: 1.6, 
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                          }}
                        >
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

        {/* Additional CTA Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, #2192FF, #57CC99)',
              borderRadius: 4,
              p: { xs: 4, sm: 5, md: 6 },
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                filter: 'blur(20px)',
              }}
            />
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Typography 
                variant="h3" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                }}
              >
                Let's Start Your Project
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                  maxWidth: '800px',
                  margin: '0 auto',
                }}
              >
                Ready to discuss your environmental service needs? Contact us today and let's work together 
                to create sustainable water management solutions for your business.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}

export default ContactSection