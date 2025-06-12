import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #ff99cc 0%, #ffb3d9 100%)',
  boxShadow: '0 4px 6px rgba(255, 153, 204, 0.2)',
  borderTopRightRadius: '0',
  borderTopLeftRadius: '0',
}));

const NavItem = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  padding: theme.spacing(0.5, 1),
  cursor: 'pointer',
  position: 'relative',
  fontFamily: '"Cocogoose", sans-serif',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#FF1493',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '100%',
      height: '2px',
      background: '#ffffff',
      animation: 'sparkle 1s infinite',
    },
  },
  '@keyframes sparkle': {
    '0%': { opacity: 0.5 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.5 },
  },
}));

const SanrioIcon = styled('span')({
  fontSize: '1.2rem',
  marginRight: '4px',
});

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(90deg, #ff99cc 0%, #ffb3d9 100%)',
    boxShadow: '0 4px 6px rgba(255, 153, 204, 0.2)',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontFamily: '"Cocogoose", sans-serif',
  color: '#ffffff',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <SanrioIcon>🎀</SanrioIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: '"Cute", cursive' }}>
            Margaux's Party
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <NavItem variant="subtitle1">Welcome</NavItem>
          <NavItem variant="subtitle1">Party Details</NavItem>
          <NavItem variant="subtitle1">RSVP</NavItem>
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
            <StyledMenuItem onClick={handleClose}>Welcome</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>Party Details</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>RSVP</StyledMenuItem>
          </StyledMenu>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
