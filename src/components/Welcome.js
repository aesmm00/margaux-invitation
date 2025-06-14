import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import welcomePhoto from '../asset/photo/welcome-section/welcomePhoto.png';

const CountdownContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
}));

const CountdownItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CountdownBox = styled(Box)(({ theme }) => ({
  background: '#670d2f',
  borderRadius: '8px',
  width: '80px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '60px',
    height: '60px',
  },
}));

const CountdownNumber = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontFamily: '"Adelia", sans-serif',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textShadow: '3px 2px 0px #cc9933',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const CountdownLabel = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Adelia", sans-serif',
  fontSize: '0.9rem',
  marginTop: theme.spacing(1),
  textTransform: 'uppercase',
  textShadow: '2px 3px 0px #FFFFFF',
}));

const CountdownTitle = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Adelia", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textShadow: '2px 3px 0px #FFFFFF',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #FFB6C1 0%, #E6F0FF 100%)',
  borderRadius: '30px',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));


const FloatingElement = styled('div')(({ theme, delay = 0, x = 0, y = 0 }) => ({
  position: 'absolute',
  animation: `float ${3 + Math.random()}s ease-in-out infinite ${delay}s`,
  fontSize: '2rem',
  left: `${x}%`,
  top: `${y}%`,
  zIndex: 1,
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translate(0, 0) rotate(0deg)',
    },
    '50%': {
      transform: 'translate(10px, -20px) rotate(5deg)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const WelcomeTitle = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Belina", sans-serif',
  fontSize: '1.75rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textShadow: '1px 1px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const CelebrantName = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontFamily: '"Stars and Love", cursive',
  fontSize: '6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textShadow: '3px 4px 0px #cc9933',
  lineHeight: '1.2',
  letterSpacing: '0.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(1),
    letterSpacing: '0.1rem',
  },
}));



const CelebrateMessage = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Belina", sans-serif',
  fontSize: '1.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  fontStyle: 'italic',
  textShadow: '1px 1px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    maxWidth: '100%',
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
}));


const theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Welcome = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-08-09T15:00:00'); // Set this to the actual event date

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const floatingElements = [
    { emoji: '⭐', x: 5, y: 20, delay: 0 },
    { emoji: '🎀', x: 80, y: 30, delay: 1 },
    { emoji: '💖', x: 15, y: 70, delay: 2 },
    { emoji: '⭐', x: 90, y: 15, delay: 3 },
    { emoji: '🎀', x: 10, y: 90, delay: 0.5 },
    { emoji: '💖', x: 85, y: 80, delay: 1.5 },
    { emoji: '✨', x: 25, y: 40, delay: 2.5 },
    { emoji: '🌟', x: 70, y: 60, delay: 1.8 },
    { emoji: '🌸', x: 40, y: 85, delay: 0.8 },
    { emoji: '🎈', x: 60, y: 25, delay: 2.2 },
    { emoji: '💖', x: 30, y: 10, delay: 1.2 },
    { emoji: '🌸', x: 95, y: 45, delay: 0.3 },
    { emoji: '💫', x: 45, y: 95, delay: 1.7 },
    { emoji: '💖', x: 75, y: 5, delay: 2.8 },
    { emoji: '🌸', x: 20, y: 55, delay: 0.7 },
    { emoji: '✨', x: 55, y: 75, delay: 2.1 }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="2xl">
      <StyledPaper elevation={3}>
        
        {floatingElements.map((el, index) => (
          <FloatingElement
            key={index}
            delay={el.delay}
            x={el.x}
            y={el.y}
          >
            {el.emoji}
          </FloatingElement>
        ))}

        <Grid container justifyContent="center" alignItems="center" direction={{ xs: 'column', sm: 'row' }}>
          <Grid size={{ xs: 12, sm: 6}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <WelcomeTitle>
                A Magical Day to Celebrate 7 !
              </WelcomeTitle>
              <CelebrantName>
                Margaux Louise
              </CelebrantName>
              <CelebrateMessage>
                Let's sparkle, laugh, and celebrate Margaux's 7th birthday with all the sweetness and magic that Sanrio brings!
              </CelebrateMessage>
              <CountdownTitle>TIME REMAINING</CountdownTitle>
              <CountdownContainer>
                <CountdownItem>
                  <CountdownBox>
                    <CountdownNumber>{countdown.days.toString().padStart(2, '0')}</CountdownNumber>
                  </CountdownBox>
                  <CountdownLabel>DAYS</CountdownLabel>
                </CountdownItem>
                <CountdownItem>
                  <CountdownBox>
                    <CountdownNumber>{countdown.hours.toString().padStart(2, '0')}</CountdownNumber>
                  </CountdownBox>
                  <CountdownLabel>HOURS</CountdownLabel>
                </CountdownItem>
                <CountdownItem>
                  <CountdownBox>
                    <CountdownNumber>{countdown.minutes.toString().padStart(2, '0')}</CountdownNumber>
                  </CountdownBox>
                  <CountdownLabel>MINUTES</CountdownLabel>
                </CountdownItem>
                <CountdownItem>
                  <CountdownBox>
                    <CountdownNumber>{countdown.seconds.toString().padStart(2, '0')}</CountdownNumber>
                  </CountdownBox>
                  <CountdownLabel>SECONDS</CountdownLabel>
                </CountdownItem>
              </CountdownContainer>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: { xs: theme.spacing(2), sm: theme.spacing(4) } }}>
            <Box sx={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: { xs: '300px', sm: '100%' } }}>
              <Image src={welcomePhoto} alt="Margaux Louise" />
            </Box>
          </Grid>
        </Grid>
      </StyledPaper>
    </Container>
    </ThemeProvider>
  );
};

export default Welcome;
