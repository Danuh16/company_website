"use client";

import React, { useState, useEffect } from "react";
import { Container, Typography, Box, useTheme } from "@mui/material";
import { useTheme as useCustomTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";

const HeroSection = () => {
  const { language } = useCustomTheme();
  const muiTheme = useTheme();
  const t = translations[language];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Replace with your actual environmental service images
  const slides = [
    {
      image: "/waterTreatment.jpg", // Remove "public" from path
      alt: "Water Treatment Services",
    },
    {
      image: "/tanker-cleaning.jpg", // Remove "public" from path
      alt: "Tanker Cleaning Services",
    },
    {
      image: "/well-inspection.jpg", // Remove "public" from path
      alt: "Well Inspection Services",
    },
    {
      image: "/water-quality.jpg", // Remove "public" from path
      alt: "Water Quality Analysis",
    },
    {
      image: "/drainage-system.jpg", // Remove "public" from path
      alt: "Drainage System Services",
    },
    {
      image: "/water-management.jpg", // Remove "public" from path
      alt: "Water Management Solutions",
    },
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      id="home"
      sx={{
        textAlign: "center",
        py: { xs: 4, sm: 6, md: 8 },
        px: 3,
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid",
        borderColor: "divider",
        minHeight: { xs: "60vh", sm: "70vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Images Slider */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, rgba(33, 146, 255, 0.3) 0%, rgba(87, 204, 153, 0.2) 100%)`,
        }}
      >
        {/* Current Slide Background */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.5s ease-in-out",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.7) contrast(1.1)",
                transition: "all 0.5s ease-in-out",
              }}
            />
          </Box>
        </Box>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "15px", sm: "20px", md: "25px" },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.5, md: 2 },
            zIndex: 5,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "50px",
            padding: { xs: "5px 10px", sm: "6px 12px", md: "8px 16px" },
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: { xs: 10, sm: 12, md: 14 },
                height: { xs: 10, sm: 12, md: 14 },
                borderRadius: "50%",
                backgroundColor:
                  currentSlide === index
                    ? "#80ED99"
                    : "rgba(128, 237, 153, 0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#48e476ff",
                  transform: "scale(1.3)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 10 }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem", lg: "4.5rem" },
            color: "#48e476ff",
            mb: 3,
          }}
        >
          ARKI Environmental Services
        </Typography>
        <Typography
          variant="h4"
          component="p"
          gutterBottom
          sx={{
            mb: 4,
            color: "#108cffff",
            fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.8rem", lg: "2rem" },
            fontWeight: 600,
          }}
        >
          Professional Water Management Solutions
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;