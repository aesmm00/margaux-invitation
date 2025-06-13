import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const scrollToSection = (ref) => {
  const element = ref.current;
  const yOffset = -75;
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#FFC0CB',
  boxShadow: 'none',
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: '#FFC0CB',
    boxShadow: 'none',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: '"Belina", sans-serif',
  color: '#000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: 'rgba(255, 105, 180, 0.1)',
    color: '#FF69B4',
  },
}));

const NavItem = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  padding: theme.spacing(0.5, 1),
  cursor: 'pointer',
  color: '#000',
  fontFamily: '"Belina", sans-serif',
  fontWeight: 'bold',
  '&:hover': {
    color: '#FF69B4',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Stars and Love", cursive',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#000',
}));

const Navbar = ({ welcomeRef, partyDetailsRef, rsvpRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    handleClose();
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="bow" style={{ marginRight: '8px', fontSize: '1.5rem' }}>🎀</span>
          <LogoText>
            Margaux's 7th Birthday Party
          </LogoText>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NavItem onClick={() => scrollToSection(welcomeRef)}>Welcome</NavItem>
          <NavItem onClick={() => scrollToSection(partyDetailsRef)}>Party Details</NavItem>
          <NavItem onClick={() => scrollToSection(rsvpRef)}>RSVP</NavItem>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <StyledMenu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={() => handleNavClick(welcomeRef)}>Welcome</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavClick(partyDetailsRef)}>Party Details</StyledMenuItem>
            <StyledMenuItem onClick={() => handleNavClick(rsvpRef)}>RSVP</StyledMenuItem>
          </StyledMenu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
