"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  alpha,
} from "@mui/material";
import {
  People as TeamIcon,
  Business as MissionIcon,
  Visibility as VisionIcon,
  TrendingUp as GrowthIcon,
  Security as SecurityIcon,
  Support as SupportIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const { language } = useCustomTheme();
  const muiTheme = useTheme();
  const t = translations[language];

  const aboutCards = [
    {
      icon: <TeamIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />,
      title: "Expert Team",
      description: "Professional team with years of industry experience",
    },
    {
      icon: (
        <MissionIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />
      ),
      title: "Our Mission",
      description: "Delivering exceptional services that exceed expectations",
    },
    {
      icon: (
        <VisionIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />
      ),
      title: "Our Vision",
      description: "Leading innovation with quality and commitment",
    },
    {
      icon: (
        <GrowthIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />
      ),
      title: "Continuous Growth",
      description: "Always evolving with the latest technologies",
    },
    {
      icon: (
        <SecurityIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />
      ),
      title: "Top Security",
      description: "Robust security measures for your peace of mind",
    },
    {
      icon: (
        <SupportIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />
      ),
      title: "24/7 Support",
      description: "Round-the-clock assistance for your business",
    },
    {
      icon: <CodeIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />,
      title: "Modern Tech",
      description: "Using cutting-edge technologies and frameworks",
    },
    {
      icon: <CloudIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }} />,
      title: "Cloud Solutions",
      description: "Scalable solutions for businesses of all sizes",
    },
  ];

  // Duplicate the array to create seamless loop
  const slidingCards = [...aboutCards, ...aboutCards];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "background.default",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{
            mb: { xs: 4, sm: 6, md: 8 },
            color: "#2192FF",
            fontWeight: "bold",
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.8rem",
              lg: "3.2rem",
            },
          }}
        >
          {t.aboutTitle}
        </Typography>

        {/* Full Width Sliding Cards Container */}
        <Box
          sx={{
            width: "100vw",
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            mb: { xs: 4, sm: 6, md: 8 },
            overflow: "hidden",
          }}
        >
          <Box
            className="sliding-cards"
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 3, md: 4 },
              width: "max-content",
              animation: "slideAbout 40s linear infinite",
              py: 2,
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {slidingCards.map((card, index) => (
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
                    {card.icon}
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
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.5,
                      fontSize: { xs: "0.75rem", sm: "0.8rem", md: "0.85rem" },
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Main About Content */}
        <Box sx={{ px: { xs: 0, sm: 2 } }}>
          <Card
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 16px 32px rgba(33, 146, 255, 0.15)",
              },
              backgroundColor: "background.paper",
              border: "2px solid",
              borderColor: "divider",
              borderRadius: 3,
              p: { xs: 3, sm: 4, md: 5 },
              width: "100%",
              maxWidth: "1400px",
              margin: "0 auto",
            }}
          >
            <CardContent sx={{ p: "0 !important", textAlign: "center" }}>
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  color: "#2192FF",
                  fontWeight: "bold",
                  mb: 4,
                  fontSize: {
                    xs: "1.6rem",
                    sm: "1.8rem",
                    md: "2.2rem",
                    lg: "2.5rem",
                  },
                }}
              >
                Why Choose ARKI?
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  mb: 4,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {t.aboutDescription}
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                We are committed to delivering excellence in every project. Our
                team combines technical expertise with creative solutions to
                help your business thrive in the environmental services
                landscape. From initial concept to final deployment, we ensure
                every detail meets the highest standards of quality and
                performance.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;