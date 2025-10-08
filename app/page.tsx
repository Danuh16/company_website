'use client'

import React from 'react'
import { Box } from '@mui/material'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServiceSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ClientWrapper from '@/components/ClientWrapper'

function HomePage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: (theme) => theme.palette.mode === 'light' 
          ? 'linear-gradient(135deg, #87CEEB20, #4CAF5020)'
          : 'linear-gradient(135deg, #1a1a1a, #2d2d2d)',
      }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </Box>
  )
}

export default function Home() {
  return (
    <ClientWrapper>
      <HomePage />
    </ClientWrapper>
  )
}