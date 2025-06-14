import React, { useState, Fragment } from 'react';
import { Box, Button, CardMedia, Container, Grid, Paper, Stack, styled, Typography, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import firstProgram from '../asset/photo/program/2.png'; 
import secondProgram from '../asset/photo/program/3.png';
import thirdProgram from '../asset/photo/program/4.png';
import googleMapQR from '../asset/photo/qrCodes/googleMapQR.png';
import wazeQR from '../asset/photo/qrCodes/wazeQR.png';


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #FFB6C1 0%, #E6F0FF 100%)',
  borderRadius: '30px',
  marginBottom: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
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
    const [currentImageIndex, setCurrentImageIndex] = useState(-1);
    const images = [firstProgram, secondProgram, thirdProgram];

    const handleOpenViewer = (index) => {
        setCurrentImageIndex(index);
    };

    const handleCloseViewer = () => {
        setCurrentImageIndex(-1);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
    };

    return (
        <Fragment>
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
                          onClick={() => handleOpenViewer(0)}
                          sx={{ 
                              width: '100%', 
                              height: 'auto', 
                              borderRadius: 2,
                              boxShadow: '5px 4px 0px  #670d2f',
                              cursor: 'pointer',
                              transition: 'transform 0.2s',
                              '&:hover': { transform: 'scale(1.02)' }
                          }}
                      />
                  </Grid>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={secondProgram}
                          onClick={() => handleOpenViewer(1)}
                          sx={{ 
                              width: '100%', 
                              height: 'auto', 
                              borderRadius: 2,
                              boxShadow: '5px 4px 0px  #670d2f',
                              cursor: 'pointer',
                              transition: 'transform 0.2s',
                              '&:hover': { transform: 'scale(1.02)' }
                          }}
                      />
                  </Grid>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={thirdProgram}
                          onClick={() => handleOpenViewer(2)}
                          sx={{ 
                              width: '100%', 
                              height: 'auto', 
                              borderRadius: 2,
                              boxShadow: '5px 4px 0px  #670d2f',
                              cursor: 'pointer',
                              transition: 'transform 0.2s',
                              '&:hover': { transform: 'scale(1.02)' }
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
                                    Date & Time:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem' }}>
                                    Saturday, August 9, 2025, at 3 PM
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction={'row'}>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontWeight: 800, fontSize: '1.2rem'}}>
                                    Venue:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Belina", sans-serif', fontSize: '1.2rem' }}>
                                    3s Canumay West Function Hall, 6 T. Santiago, Valenzuela, Metro Manila
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
            {currentImageIndex !== -1 && (
                <ImageViewer
                    images={images}
                    currentIndex={currentImageIndex}
                    onClose={handleCloseViewer}
                    onPrev={handlePrevImage}
                    onNext={handleNextImage}
                />
            )}
        </Fragment>
    );
};

const ImageViewer = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    const [zoom, setZoom] = useState(1);

    const handleZoomIn = () => {
        setZoom(prev => Math.min(prev + 0.1, 3));
    };

    const handleZoomOut = () => {
        setZoom(prev => Math.max(prev - 0.1, 0.5));
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                }}
            >
                <Typography color="white">
                    {`${currentIndex + 1} of ${images.length}`}
                </Typography>
                <IconButton
                    onClick={onClose}
                    sx={{ color: 'white' }}
                >
                    <CloseIcon />
                </IconButton>
            </Box>
            <IconButton
                onClick={onPrev}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 20,
                    color: 'white',
                    transform: 'translateY(-50%)',
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
                onClick={onNext}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 20,
                    color: 'white',
                    transform: 'translateY(-50%)',
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
            <img
                src={images[currentIndex]}
                alt={`${currentIndex + 1}`}
                style={{
                    maxWidth: '90%',
                    maxHeight: '90%',
                    objectFit: 'contain',
                    transform: `scale(${zoom})`,
                    transition: 'transform 0.2s',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 60,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                }}
            >
                <IconButton onClick={handleZoomOut} sx={{ color: 'white' }}>
                    <ZoomOutIcon />
                </IconButton>
                <IconButton onClick={handleZoomIn} sx={{ color: 'white' }}>
                    <ZoomInIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default PartyDetails;
