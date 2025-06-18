import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper, Grid, Box } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';

const photos = [
  require('../asset/photo/aboutMe/JHE_5576.jpg'),
  require('../asset/photo/aboutMe/JHE_5582.jpg'),
  require('../asset/photo/aboutMe/JHE_5603.jpg'),
  require('../asset/photo/aboutMe/JHE_5627.jpg'),
  require('../asset/photo/aboutMe/JHE_5680.jpg'),
  require('../asset/photo/aboutMe/JHE_5708.jpg'),
  require('../asset/photo/aboutMe/JHE_5713.jpg'),
  require('../asset/photo/aboutMe/JHE_5714.jpg'),

]

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

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Adelia", sans-serif',
  fontSize: '3rem',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  textShadow: '3px 2px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const AboutText = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Quintessential", serif',
  marginBottom: theme.spacing(4),
  textShadow: '3px 2px 0px #FFFFFF',
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.5s ease-in-out',
}));

const ImageContainer = styled(Box)(({ theme, offset = 0, isActive }) => ({
  position: 'absolute',
  width: '280px',
  height: '350px',
  overflow: 'hidden',
  borderRadius: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.5s ease-in-out',
  transform: 'translate(-50%, -50%) rotate(0deg)',
  opacity: 1,
  zIndex: isActive ? 10 : 5 - Math.abs(offset),
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '250px',
  },
}));

const CollageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '400px',
  marginTop: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    height: '300px',
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

const EmojiSpan = styled('span')({
  fontSize: '1.4em',
  verticalAlign: 'middle',
  marginRight: '0.2em',
});

const BoldSpan = styled('span')({
  fontWeight: 'bold',
  color: '#670d2f',
  textShadow: '0.5px 0.5px 0px #FFFFFF',
});

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

const AboutMe = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const floatingElements = [
    { emoji: '🎨', x: 5, y: 20, delay: 0 },
    { emoji: '🦄', x: 80, y: 30, delay: 1 },
    { emoji: '🎀', x: 15, y: 70, delay: 2 },
    { emoji: '🐼', x: 90, y: 15, delay: 3 },
    { emoji: '🩺', x: 10, y: 90, delay: 0.5 },
    { emoji: '🎭', x: 85, y: 80, delay: 1.5 },
    { emoji: '✨', x: 25, y: 40, delay: 2.5 },
    { emoji: '🌟', x: 70, y: 60, delay: 1.8 },
    { emoji: '🎈', x: 40, y: 85, delay: 0.8 },
    { emoji: '🎪', x: 60, y: 25, delay: 2.2 },
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
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }} alignItems={'center'} justifyContent='center'>
              <CollageContainer>
                {photos.map((photo, index) => {
                  const offset = (index - currentPhotoIndex + photos.length) % photos.length;
                  return (
                    <ImageContainer 
                      key={index} 
                      style={{ top: '50%', left: '50%' }}
                      offset={offset}
                      isActive={index === currentPhotoIndex}
                    >
                      <Image src={photo} alt={`Margaux Louise ${index + 1}`} />
                    </ImageContainer>
                  );
                })}
              </CollageContainer>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <SectionTitle variant="h4">About Margaux Louise</SectionTitle>
              <AboutText variant="body1">
                Hi! My name is <BoldSpan>Margaux Louise Macavinta Rosales</BoldSpan>, but you can call me Margo! <EmojiSpan>🐼</EmojiSpan>I'm turning <BoldSpan>7 years old</BoldSpan> this year — 
                I was born on <BoldSpan>August 8, 2018</BoldSpan>. My favorite colors are <BoldSpan>pink, blue, and purple</BoldSpan> because they're soft and magical. I love eating <BoldSpan>fresh milk and breadsticks</BoldSpan>, 
                especially as a snack! For fun, I enjoy playing <BoldSpan>"Grow a Garden" on Roblox</BoldSpan> and watching <BoldSpan>Peppa Pig and Sanrio shows</BoldSpan> — they always make me smile.
              </AboutText>
              <AboutText variant="body1">
                I have three awesome pets named <BoldSpan>Shadow, Mulan, and Wigo</BoldSpan>. If I could have even more animals, I'd love to have a <BoldSpan>cat and a bird</BoldSpan> as pets too! 
                Someday, I want to be a <BoldSpan>teacher or a lawyer</BoldSpan> — I think helping others and learning new things is exciting! I'm really good at <BoldSpan>drawing</BoldSpan>, and I feel super happy 
                when my brother is joking around and making me laugh.
              </AboutText>
              <AboutText variant="body1">
                If I could travel anywhere, I'd visit <BoldSpan>Beijing, China</BoldSpan>! <EmojiSpan>🇨🇳</EmojiSpan> My best friend is <BoldSpan>Hazel</BoldSpan> — 
                she's kind and always a good friend to me. And here's something cool I want everyone to know: <BoldSpan>I'm a genius</BoldSpan> — and I love getting to know people, too!
              </AboutText>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </ThemeProvider>
  );
};

export default AboutMe;
