"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as AboutIcon,
  BusinessCenter as ServicesIcon,
  ContactMail as ContactIcon,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "@/contexts/ThemeContext";
import { translations } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import logo from "../public/logo.jpg";

const Header = () => {
  const { language } = useCustomTheme();
  const t = translations[language];
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { label: t.home, section: "home", icon: <HomeIcon sx={{ mr: 1 }} /> },
    { label: t.about, section: "about", icon: <AboutIcon sx={{ mr: 1 }} /> },
    {
      label: t.services,
      section: "services",
      icon: <ServicesIcon sx={{ mr: 1 }} />,
    },
    {
      label: t.contact,
      section: "contact",
      icon: <ContactIcon sx={{ mr: 1 }} />,
    },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 10 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, my: 2 }}>
  <Image
  src={logo}
  alt="ARKI Logo"
  width={200}
  height={200}
  style={{ 
    width: "auto", 
    height: { xs: "50px", sm: "60px", md: "70px" },
    objectFit: "contain"
  }}
/>
  <Typography variant="h6" sx={{ color: "#2192FF", fontWeight: "bold" }}>
    ARKI Environmental Services
  </Typography>
</Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <Button
              fullWidth
              color="inherit"
              startIcon={item.icon}
              onClick={() => scrollToSection(item.section)}
              sx={{
                justifyContent: "flex-start",
                px: 3,
                py: 1.5,
                color: "text.primary",
                "&:hover": {
                  backgroundColor: "#57CC99",
                  color: "white",
                },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#57CC99",
              "&:hover": {
                backgroundColor: "#4aba87",
              },
            }}
          >
            {t.login}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
        boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Logo for desktop */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
            <Image
              src={logo}
              alt="ARKI Logo"
              width={28}
              height={28}
              style={{ 
                width: "auto", 
                height: "28px",
                objectFit: "contain"
              }}
            />
          </Box>
        )}

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: isMobile ? 1 : 0,
            color: "#2192FF",
            fontWeight: "bold",
            fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" },
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("home")}
        >
          ARKI Environmental Services
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              gap: 1,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                startIcon={item.icon}
                onClick={() => scrollToSection(item.section)}
                sx={{
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "#57CC99",
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(87, 204, 153, 0.3)",
                  },
                  transition: "all 0.3s ease",
                  mx: 0.5,
                  borderRadius: 2,
                  fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LanguageSwitcher />
          <ThemeSwitcher />
          {!isMobile && (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#57CC99",
                color: "white",
                "&:hover": {
                  backgroundColor: "#4aba87",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(87, 204, 153, 0.3)",
                },
                transition: "all 0.3s ease",
                borderRadius: 2,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
              }}
            >
              {t.login}
            </Button>
          )}
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;