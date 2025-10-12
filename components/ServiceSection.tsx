"use client";

import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  Button,
  alpha,
} from "@mui/material";
import {
  CleanHands as CleaningIcon,
  Plumbing as WellIcon,
  Science as QualityIcon,
  LocalShipping as TankerIcon,
  BusinessCenter as ManagementIcon,
  Architecture as DrainageIcon,
  AccountTree as WaterlineIcon,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";

const ServicesSection = () => {
  const { language } = useCustomTheme();
  const muiTheme = useTheme();
  const t = translations[language];
  const slidingContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <CleaningIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Water Tanker Inspection, Cleaning and Curing",
      description:
        "Professional inspection, thorough cleaning, and effective curing services for water tankers to ensure water quality and safety standards.",
    },
    {
      icon: <WellIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Well Inspection, Cleaning and Curing",
      description:
        "Comprehensive well inspection, deep cleaning, and proper curing services to maintain well water quality and structural integrity.",
    },
    {
      icon: <QualityIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Water Quality Inspection Service",
      description:
        "Advanced water quality testing and analysis services to ensure your water meets health and safety standards.",
    },
    {
      icon: <TankerIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Waterway and Tanker Research and Deployment",
      description:
        "Research-based solutions for waterway management and efficient tanker deployment strategies for optimal water distribution.",
    },
    {
      icon: <ManagementIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Management of Water Facilities",
      description:
        "Professional management services for water treatment plants, storage facilities, and distribution systems.",
    },
    {
      icon: <DrainageIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Drainage System Research and Building, Consulting Services",
      description:
        "Expert research, construction, and consulting services for efficient drainage system design and implementation.",
    },
    {
      icon: <WaterlineIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: "Clearing and Treating Waterline Inspection",
      description:
        "Comprehensive waterline inspection, clearing, and treatment services to maintain optimal flow and water quality.",
    },
  ];

  // Duplicate services for seamless sliding
  const slidingServices = [...services, ...services];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Pause animation on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        background: `linear-gradient(135deg, ${alpha(
          "#2192FF",
          0.03
        )} 0%, ${alpha("#57CC99", 0.03)} 50%, ${alpha("#80ED99", 0.03)} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${alpha(
            "#2192FF",
            0.1
          )} 0%, ${alpha("#57CC99", 0.1)} 100%)`,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${alpha(
            "#80ED99",
            0.1
          )} 0%, ${alpha("#57CC99", 0.1)} 100%)`,
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth={false}
        sx={{ position: "relative", zIndex: 1, px: { xs: 0, sm: 2, md: 3 } }}
      >
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, sm: 8, md: 10 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(135deg, #2192FF, #57CC99)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
              mb: 2,
            }}
          >
            {t.servicesTitle}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              lineHeight: 1.6,
            }}
          >
            Comprehensive environmental services tailored to meet your water
            management needs with excellence and precision.
          </Typography>
        </Box>

        {/* Sliding Services Container */}
        <Box
          sx={{
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            mb: 6,
            overflow: "hidden",
            py: 4,
          }}
        >
          <Box
            ref={slidingContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3, md: 4 },
              animation: isPaused
                ? "none"
                : "slideServices 40s linear infinite",
              width: "max-content",
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {slidingServices.map((service, index) => (
              <Card
                key={index}
                sx={{
                  minWidth: { xs: 260, sm: 280, md: 300, lg: 320 },
                  height: { xs: 200, sm: 220, md: 240, lg: 250 },
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.05)",
                    boxShadow: "0 20px 40px rgba(33, 146, 255, 0.2)",
                  },
                  backgroundColor: "background.paper",
                  border: "2px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  textAlign: "center",
                  p: { xs: 2, sm: 3 },
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      color: "#57CC99",
                      mb: { xs: 1, sm: 2 },
                      "& svg": {
                        fontSize: { xs: 32, sm: 36, md: 40 },
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: "#2192FF",
                      mb: 1,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.1rem",
                        md: "1.2rem",
                        lg: "1.3rem",
                      },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.5,
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Navigation Dots */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 6,
            gap: 1.5,
          }}
        >
          {services.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: { xs: 10, sm: 12 },
                height: { xs: 10, sm: 12 },
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === index ? "#2192FF" : alpha("#2192FF", 0.3),
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor:
                    currentIndex === index ? "#2192FF" : alpha("#2192FF", 0.6),
                  transform: "scale(1.3)",
                },
              }}
            />
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #2192FF, #57CC99)",
            borderRadius: 4,
            p: { xs: 4, sm: 6, md: 8 },
            textAlign: "center",
            color: "white",
            position: "relative",
            overflow: "hidden",
            mx: { xs: 2, sm: 3 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(20px)",
            }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              position: "relative",
              zIndex: 1,
            }}
          >
            Contact us today for professional environmental services and water
            management solutions.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "white",
                color: "#2192FF",
                fontWeight: "bold",
                px: { xs: 4, sm: 5 },
                py: 1.5,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": {
                  backgroundColor: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(255,255,255,0.3)",
                },
                transition: "all 0.3s ease",
                borderRadius: 3,
              }}
            >
              Request Inspection
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                fontWeight: "bold",
                px: { xs: 4, sm: 5 },
                py: 1.5,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                "&:hover": {
                  backgroundColor: "white",
                  color: "#2192FF",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(255,255,255,0.2)",
                },
                transition: "all 0.3s ease",
                borderRadius: 3,
              }}
            >
              Get Consultation
            </Button>
          </Box>
        </Box>
      </Container>

      <style jsx global>{`
        @keyframes slideServices {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
      `}</style>
    </Box>
  );
};

export default ServicesSection;
