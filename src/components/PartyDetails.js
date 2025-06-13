import React from 'react';
import { Box, Button, CardMedia, Container, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import firstProgram from '../asset/photo/program/2.png'; 
import secondProgram from '../asset/photo/program/3.png';
import thirdProgram from '../asset/photo/program/4.png';
import googleMapQR from '../asset/photo/qrCodes/googleMapQR.png';
import wazeQR from '../asset/photo/qrCodes/wazeQR.png';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #FFB6C1 0%, #E6F0FF 100%)',
  borderRadius: '20px',
  marginBottom: theme.spacing(4),

}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Belina", sans-serif',
  fontSize: '4rem',
  fontWeight: 500,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  textShadow: '3px 2px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Belina", sans-serif',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  textShadow: '3px 2px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const DecorativeCircle = styled('div')(({ size = 60, color}) => ({
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: color,
  borderRadius: '50%',
  border: '1px solid #670d2f',
  lineHeight: '1',
}));

const PartyDetails = () => {
    return (
        <Container maxWidth="2xl" mx>
            <StyledPaper elevation={3}>
              <StyledTitle variant="h2" gutterBottom>
                  Honoring Traditions & Cherished Moments 
              </StyledTitle>
              <StyledDescription>
                Celebrate the heartfelt Filipino birthday customs with Margaux as she shares meaningful moments with her loved ones. From the elegance of the 7 Roses and the warmth of the 7 Candles, to the generosity of the 7 Blue Bills, sweetness of the 7 Sweets, the laughter in 7 Storybooks, and the love in the 7 Treasures — each ritual is a symbol of love, blessings, and unforgettable memories. 
              </StyledDescription>

              <Grid container spacing={2} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={firstProgram}
                          sx={{ width: '100%', height: 'auto', borderRadius: 2,
                            boxShadow: '5px 4px 0px  #670d2f'
                           }}
                      />
                  </Grid>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={secondProgram}
                            sx={{ width: '100%', height: 'auto', borderRadius: 2,
                            boxShadow: '5px 4px 0px  #670d2f'
                           }}                      />
                  </Grid>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={thirdProgram}
                          sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: '5px 4px 0px  #670d2f'
 }}
                      />
                      </Grid>
              </Grid>

                <Box sx={{ mt: 4, mb: 2 }}>
                    <StyledTitle variant="h2" gutterBottom>
                        What to Wear & How to Get There
                    </StyledTitle>
                    <Grid container  direction={'row'} alignItems={'center'} justifyContent={'center'} mt={4}>
                        <Grid size={{ xl: 4, md: 6, xs: 12 }}>

                            <Stack spacing={2} direction={'row'}>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontWeight: 800, fontSize: '1.2rem'}}>
                                    Theme:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem' }}>
                                    Whimsical Elegance with a Sanrio Sparkle                                
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontWeight: 800, fontSize: '1.2rem'}}>
                                    Dress Code:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem' }}>
                                    Formal/ Semi-Formal Attire                                
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontWeight: 800, fontSize: '1.2rem'}}>
                                    Color Pallette:
                                </Typography>
                                <Stack spacing={2} direction={'row'} useFlexGap
                                    sx={{ flexWrap: 'wrap' }}>
                                    <DecorativeCircle size={40} color="#fadadd" />
                                    <DecorativeCircle size={40} color="#bce6f6" />
                                    <DecorativeCircle size={40} color="#dcc6f6" />
                                    <DecorativeCircle size={40} color="#fff4b1" />
                                    <DecorativeCircle size={40} color="#cff5e7" />
                                    <DecorativeCircle size={40} color="#ffd8b1" />
                                </Stack>                            
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontWeight: 800, fontSize: '1.2rem'}}>
                                    Venue:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem' }}>
                                    3s Canumay West Function Hall, 6 T. Santiago, Valenzuela, Metro Manila
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontWeight: 800, fontSize: '1.2rem'}}>
                                    Date & Time:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem' }}>
                                    Saturday, August 9, 2024, at 3 PM
                                </Typography>
                            </Stack>

                        </Grid>
                        <Grid size={{ xl: 4, md: 6, xs: 12 }}>
  

                            <Stack >
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem'}}>
                                    Need directions? Just click or scan the magical QR code below to lead you straight to the celebration! 
                                </Typography>
                                <Stack spacing={2} direction={'row'} useFlexGap
                                    sx={{ flexWrap: 'wrap' }}>
                                    <Button 
                                        component="a" 
                                        href="https://maps.app.goo.gl/2NSRpPJ9xqWJzQvd9" 
                                        target="_blank"
                                        sx={{ p: 0, minWidth: 'auto' }}
                                    >
                                        <Box component="img" src={googleMapQR} alt="Google Maps QR Code" sx={{ width: 100, height: 100, borderRadius: 2, boxShadow: '5px 4px 0px #670d2f', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} />
                                    </Button>
                                    <Button 
                                        component="a" 
                                        href="https://waze.com/ul/hwdw59j12u" 
                                        target="_blank"
                                        sx={{ p: 0, minWidth: 'auto' }}
                                    >
                                        <Box component="img" src={wazeQR} alt="Waze QR Code" sx={{ width: 100, height: 100, borderRadius: 2, boxShadow: '5px 4px 0px #670d2f', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }} />
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
              </Box>
            </StyledPaper>
        </Container>
    );
};

export default PartyDetails;
