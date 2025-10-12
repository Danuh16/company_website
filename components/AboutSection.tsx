"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  useTheme,
  Grid,
  alpha,
} from "@mui/material";
import {
  People as TeamIcon,
  Business as MissionIcon,
  Visibility as VisionIcon,
  TrendingUp as GrowthIcon,
  CheckCircle as CheckIcon,
  Star as StarIcon,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";

const AboutSection = () => {
  const { language } = useCustomTheme();
  const muiTheme = useTheme();
  const t = translations[language];

  const aboutCards = [
    {
      icon: <TeamIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44 } }} />,
      title: "Expert Team",
      description: "Professional team with years of industry experience",
    },
    {
      icon: <MissionIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44 } }} />,
      title: "Our Mission",
      description:
        "To safeguard public health by providing reliable, hygienic, and efficient water storage system services.",
    },
    {
      icon: <VisionIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44 } }} />,
      title: "Our Vision",
      description:
        "To become Ethiopia's most trusted and innovative environmental services provider.",
    },
    {
      icon: <GrowthIcon sx={{ fontSize: { xs: 36, sm: 40, md: 44 } }} />,
      title: "Our Values",
      description: [
        "Integrity: Honesty and transparency",
        "Excellence: Superior quality services",
        "Safety: Health and safety priority",
        "Innovation: Modern eco-friendly methods",
        "Sustainability: Water conservation practices",
      ],
    },
  ];

  const whyChooseUsPoints = [
    {
      icon: <CheckIcon color="success" />,
      title: "Specialized Expertise",
      description:
        "Combining engineering know-how with environmental health expertise",
    },
    {
      icon: <StarIcon color="primary" />,
      title: "Certified SOPs",
      description:
        "Following national and international standards including ES 261:2015 and WHO guidelines",
    },
    {
      icon: <CheckIcon color="success" />,
      title: "End-to-End Services",
      description:
        "Complete service package from inspection to certification and maintenance",
    },
    {
      icon: <StarIcon color="primary" />,
      title: "Safety Excellence",
      description:
        "Safety-first culture with strict confined-space protocols and environmental safeguards",
    },
    {
      icon: <CheckIcon color="success" />,
      title: "Institutional Partnerships",
      description:
        "Strong ties with EWTI and EWUF for added credibility and specialized laboratories",
    },
    {
      icon: <StarIcon color="primary" />,
      title: "Local & Global Knowledge",
      description:
        "Understanding Ethiopian water systems with global best practices",
    },
    {
      icon: <CheckIcon color="success" />,
      title: "Multidisciplinary Team",
      description:
        "Engineers, microbiologists, and specialists with decades of combined experience",
    },
    {
      icon: <StarIcon color="primary" />,
      title: "Client-Centered Approach",
      description:
        "Tailored solutions for operational needs, budget, and sustainability goals",
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        backgroundColor: "background.default",
        width: "100%",
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

        {/* Static About Cards - One Row */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, sm: 8, md: 10 } }}>
          {aboutCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  width: { xs: 280, sm: 300, md: 442 }, // Static width
                  height: { xs: 320, sm: 340, md: 360 }, // Increased height for text wrapping
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(33, 146, 255, 0.2)",
                  },
                  backgroundColor: "background.paper",
                  border: "2px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  textAlign: "center",
                  p: { xs: 2, sm: 3 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0, // Prevent width from changing
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      color: "#57CC99",
                      mb: { xs: 2, sm: 2.5 },
                      "& svg": {
                        fontSize: { xs: 36, sm: 40, md: 44 },
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
                      mb: 2,
                      fontSize: {
                        xs: "1.1rem",
                        sm: "1.2rem",
                        md: "1.3rem",
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
                      fontSize: {
                        xs: "0.8rem",
                        sm: "0.85rem",
                        md: "0.9rem",
                      },
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    {Array.isArray(card.description) ? (
                      <Box
                        component="ul"
                        sx={{
                          pl: 2,
                          textAlign: "left",
                          "& li": {
                            fontSize: {
                              xs: "0.75rem",
                              sm: "0.8rem",
                              md: "0.85rem",
                            },
                            mb: 1,
                            lineHeight: 1.4,
                          },
                        }}
                      >
                        {card.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </Box>
                    ) : (
                      card.description
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Main About Content */}
        <Box sx={{ mb: 6 }}>
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
                Background
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  lineHeight: 1.8,
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                "Arki Environmental Services is an Ethiopian-owned environmental
                solutions company specializing in water storage and conveyance
                systems, and water well inspection, cleaning, maintenance, and
                disinfection services. Established to address the growing need
                for safe, clean, and reliable water storage and conveyance
                systems in residential, commercial, industrial, and
                institutional facilities, Arki combines modern technology,
                industry best practices, and environmental responsibility to
                protect public health and water quality. We work in compliance
                with Ethiopian Public Health Proclamation, Ministry of Water &
                Energy guidelines, and international sanitation standards (WHO
                Guidelines for Drinking-Water Quality).
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Why Choose Us Section */}
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
          <CardContent sx={{ p: "0 !important" }}>
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{
                color: "#2192FF",
                fontWeight: "bold",
                mb: 6,
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

            <Grid container spacing={3}>
              {whyChooseUsPoints.map((point, index) => (
                <Grid item xs={12} sm={6} md={6} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        backgroundColor: alpha("#2192FF", 0.02),
                      },
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      p: 2,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Box
                        sx={{
                          mt: 0.5,
                          "& svg": {
                            fontSize: { xs: 20, sm: 24 },
                          },
                        }}
                      >
                        {point.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: "#2192FF",
                            fontSize: {
                              xs: "0.9rem",
                              sm: "1rem",
                              md: "1.1rem",
                            },
                            mb: 1,
                          }}
                        >
                          {point.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            lineHeight: 1.5,
                            fontSize: {
                              xs: "0.8rem",
                              sm: "0.85rem",
                              md: "0.9rem",
                            },
                          }}
                        >
                          {point.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Additional Info */}
            <Box
              sx={{
                mt: 4,
                p: 3,
                backgroundColor: alpha("#57CC99", 0.08),
                borderRadius: 2,
                border: "1px solid",
                borderColor: alpha("#57CC99", 0.2),
              }}
            >
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  color: "#2192FF",
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                Your Trusted Partner in Water Safety
              </Typography>
              <Typography
                variant="body1"
                textAlign="center"
                color="text.secondary"
                sx={{
                  lineHeight: 1.6,
                }}
              >
                With Arki Environmental Services, you're choosing a partner
                dedicated to ensuring the highest standards of water quality,
                safety, and environmental responsibility for your community and
                facility.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutSection;
