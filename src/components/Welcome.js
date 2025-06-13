import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import welcomePhoto from '../asset/photo/welcome-section/welcomePhoto.png';

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

const ContentBox = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: theme.spacing(4),
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(2),
  },
}));

const PhotoCollage = styled(Box)(({ theme }) => ({
  width: '50%',
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(2),
  minHeight: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    minHeight: '400px',
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
    fontSize: '3rem',
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

        <ContentBox>
          <Box width="100%" textAlign="center">
            <WelcomeTitle>
              A Magical Day to Celebrate 7 !
            </WelcomeTitle>
            <CelebrantName>
              Margaux Louise
              {/* <CelebrantAge>7</CelebrantAge> */}
            </CelebrantName>
            <CelebrateMessage>
              Let's sparkle, laugh, and celebrate Margaux's 7th birthday with all the sweetness and magic that Sanrio brings!
            </CelebrateMessage>
          </Box>
        </ContentBox>

        <PhotoCollage>
          <Box position="relative" width="100%" height="100%">
              <Image src={welcomePhoto} alt="Margaux Louise" />
          </Box>
        </PhotoCollage>
      </StyledPaper>
    </Container>
    </ThemeProvider>
  );
};

export default Welcome;
