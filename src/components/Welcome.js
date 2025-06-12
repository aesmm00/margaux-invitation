import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import largePhoto from '../asset/photo/welcome-section/largePhoto.jpg';
import smallPhoto1 from '../asset/photo/welcome-section/smallPhoto1.jpg';
import smallPhoto2 from '../asset/photo/welcome-section/smallPhoto2.jpg';

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
  border: '3px solid #FF69B4',
  boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

const BackgroundSeven = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  fontSize: '500px',
  fontFamily: '"Mister Grape", cursive',
  color: 'rgba(255, 182, 193, 0.15)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(-10deg)',
  pointerEvents: 'none',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '300px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '200px',
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
  color: '#FF1493',
  fontFamily: '"Cute", cursive',
  fontSize: '1.75rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textShadow: '2px 2px 0px #FFF, 4px 4px 0px #FF69B4',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const CelebrantName = styled(Typography)(({ theme }) => ({
  color: '#FF1493',
  fontFamily: '"Cute", cursive',
  fontSize: '6rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  textShadow: '2px 2px 0px #FFF, 4px 4px 0px #FF69B4',
  lineHeight: '1.2',
  letterSpacing: '0.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

const CelebrateMessage = styled(Typography)(({ theme }) => ({
  color: '#FF69B4',
  fontFamily: '"KG Perfect Penmanship", cursive',
  fontSize: '1.5rem',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  maxWidth: '80%',
  fontStyle: 'italic',
  textShadow: '1px 1px 0px #FFF, 2px 2px 0px #FF69B4',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    maxWidth: '100%',
  },
}));

const LargePhoto = styled('img')(({ theme }) => ({
  width: '300px',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '8px solid #FF69B4',
  boxShadow: '0 4px 20px rgba(255, 105, 180, 0.3)',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '200px',
  },
}));

const SmallPhoto = styled('img')(({ theme }) => ({
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '4px solid #FF69B4',
  boxShadow: '0 4px 12px rgba(255, 105, 180, 0.2)',
  margin: theme.spacing(0, 1),
  [theme.breakpoints.down('sm')]: {
    width: '100px',
    height: '100px',
  },
}));

const TinyPhoto = styled('img')(({ theme }) => ({
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '3px solid #FF69B4',
  boxShadow: '0 4px 8px rgba(255, 105, 180, 0.2)',
  margin: theme.spacing(0, 1),
  [theme.breakpoints.down('sm')]: {
    width: '80px',
    height: '80px',
  },
}));

const MediumPhoto = styled('img')(({ theme }) => ({
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '6px solid #FF69B4',
  boxShadow: '0 4px 16px rgba(255, 105, 180, 0.25)',
  margin: theme.spacing(0, 1),
  [theme.breakpoints.down('sm')]: {
    width: '150px',
    height: '150px',
  },
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
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="2xl">
      <StyledPaper elevation={3}>
        <BackgroundSeven>7</BackgroundSeven>
        
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
            </CelebrantName>
            <CelebrateMessage>
              Let's sparkle, laugh, and celebrate Margaux's 7th birthday with all the sweetness and magic that Sanrio brings!
            </CelebrateMessage>
          </Box>
        </ContentBox>

        <PhotoCollage>
          <Box position="relative" width="100%" height="100%">
            {/* Center large photo */}
            <Box position="absolute" left="50%" top="50%" sx={{ 
              transform: 'translate(-50%, -50%) rotate(-5deg)', 
              zIndex: 2,
              [theme.breakpoints.down('sm')]: {
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
            }}>
              <LargePhoto src={largePhoto} alt="Margaux Louise" />
            </Box>
            
            {/* Overlapping photos in collage arrangement */}
            <Box position="absolute" left="10%" top="10%" sx={{ 
              transform: 'rotate(8deg)', 
              zIndex: 3,
              [theme.breakpoints.down('sm')]: {
                left: '5%',
                top: '5%',
              },
            }}>
              <MediumPhoto src={smallPhoto1} alt="Photo 1" />
            </Box>
            <Box position="absolute" right="5%" top="15%" sx={{ 
              transform: 'rotate(-10deg)', 
              zIndex: 1,
              [theme.breakpoints.down('sm')]: {
                right: '5%',
                top: '5%',
              },
            }}>
              <SmallPhoto src={smallPhoto2} alt="Photo 2" />
            </Box>
            <Box position="absolute" left="15%" bottom="15%" sx={{ 
              transform: 'rotate(12deg)', 
              zIndex: 4,
              [theme.breakpoints.down('sm')]: {
                left: '5%',
                bottom: '5%',
              },
            }}>
              <SmallPhoto src={smallPhoto1} alt="Photo 3" />
            </Box>
            <Box position="absolute" right="20%" bottom="20%" sx={{ 
              transform: 'rotate(-8deg)', 
              zIndex: 3,
              [theme.breakpoints.down('sm')]: {
                right: '5%',
                bottom: '5%',
              },
            }}>
              <MediumPhoto src={smallPhoto2} alt="Photo 4" />
            </Box>
            <Box position="absolute" left="40%" top="5%" sx={{ 
              transform: 'rotate(15deg)', 
              zIndex: 1,
              [theme.breakpoints.down('sm')]: {
                display: 'none',
              },
            }}>
              <TinyPhoto src={largePhoto} alt="Photo 5" />
            </Box>
            <Box position="absolute" right="35%" bottom="10%" sx={{ 
              transform: 'rotate(-15deg)', 
              zIndex: 2,
              [theme.breakpoints.down('sm')]: {
                display: 'none',
              },
            }}>
              <SmallPhoto src={smallPhoto1} alt="Photo 6" />
            </Box>
          </Box>
        </PhotoCollage>
      </StyledPaper>
    </Container>
    </ThemeProvider>
  );
};

export default Welcome;
