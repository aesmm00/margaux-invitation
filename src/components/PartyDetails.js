import React, { useState, Fragment } from 'react';
import { Box, Button, CardMedia, Container, Grid, Paper, Stack, styled, Typography, IconButton } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import googleMapQR from '../asset/photo/qrCodes/googleMapQR.png';
import wazeQR from '../asset/photo/qrCodes/wazeQR.png';

const programPhotos = [
    require('../asset/photo/program/7rosesAndCandles.png'),
    require('../asset/photo/program/7blueBillsAndTreasures.png'),
    require('../asset/photo/program/7sweetsAndStorybooks.png'),
    require('../asset/photo/program/7giftsAndGiftIdeas.png')
];


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
  fontFamily: '"Quintessential", serif',
  fontSize: '1.5rem',
  marginBottom: theme.spacing(4),
  textShadow: '3px 2px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const DecorativeCircle = styled('div')(({ size = 50, color}) => ({
  width: `${size}px`,
  height: `${size}px`,
  backgroundColor: color,
  borderRadius: '50%',
  lineHeight: '1',
  marginLeft: '-25px', // Half of the circle size for overlap
  '&:first-of-type': {
    marginLeft: 0,
  },
  boxShadow: '0 0 0 1px #670d2f', // White border for better separation
}));

const PartyDetails = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(-1);
    const images = programPhotos;

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
                    Sweet Traditions              
                </StyledTitle>
                <StyledDescription>
                    Join Margaux in celebrating heartfelt Filipino birthday traditions — from the 7 Roses and 7 Candles to the 7 Blue Bills, Sweets, Storybooks, and Treasures — each one a symbol of love, laughter, and lasting memories.
                </StyledDescription>
                <Grid container spacing={2} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                    {programPhotos.map((photo, index) => (
                        <Grid item key={index} size={{ xs: 12, sm: 6, xl: 3 }}>
                            <CardMedia
                                component="img"
                                alt="Birthday Celebration"
                                image={photo}
                                onClick={() => handleOpenViewer(index)}
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
                    ))}
                </Grid>

                <Box sx={{ mt: 4, mb: 2 }}>
                    <StyledTitle variant="h2" gutterBottom>
                        Party Details
                    </StyledTitle>
                    <Grid container direction={'row'} alignItems={'center'} justifyContent={'center'} mt={4} spacing={2}>
                        <Grid size={{ sm: 12, md: 6}}  spacing={2}>
                            <Box sx={{ spacing: 2}}>
                                <Typography variant="h2" sx={{textAlign: 'center', color: '#670d2f', fontFamily: '"Malibu", san-serif', textShadow: '3px 2px 0px #FFFFFF', fontWeight: 600}}>
                                    Date & Venue
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF' }}>
                                    We’re so excited to celebrate this special day with you!<br />
                                    Join us on:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF', marginLeft: 2  }}>
                                    <strong>Saturday, August 9, 2023</strong><br />
                                    <strong>3:00 PM</strong><br />
                                    <strong>At the beautiful</strong><br />
                                    <strong>3s Canumay West Function Hall</strong><br />
                                    <strong>in 6 T. Santiago, Valenzuela, Metro Manila</strong>
                                </Typography>                        
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF' }}>
                                    Get ready for a magical afternoon filled with laughter, love, and sweet memories!
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ sm: 12, md: 6}}  spacing={2}>
                            <Box sx={{textAlign: 'center', spacing: 2}}>
                                <Typography variant="h2" sx={{ color: '#670d2f', fontFamily: '"Malibu", san-serif', textShadow: '3px 2px 0px #FFFFFF', fontWeight: 600}}>
                                    Dress Code
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF' }}>
                                    Feel free to come in casual to semi-formal wear — I’d love to see you in colors from this sweet palette!                            
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                                    <Stack direction={'row'}> {/* Offset the negative margin of the first circle */}
                                        <DecorativeCircle color="#ebd6f2" />
                                        <DecorativeCircle color="#cba0dc" />
                                        <DecorativeCircle color="#a366c1" />
                                        <DecorativeCircle color="#6d2c85" />
                                        <DecorativeCircle color="#2e073f" />
                                    </Stack> 
                                </Box>                           
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF' }}>
                                    To keep it extra special, let’s leave PINK for our birthday girl, Margaux!                                
                                </Typography>
                            </Box>
                        </Grid>


                        
                        <Grid item size={{ sm: 12, md: 6}}>
                            <Box sx={{textAlign: 'center', spacing: 2}}>
                                <Typography variant="h2" sx={{ color: '#670d2f', fontFamily: '"Malibu", san-serif', textShadow: '3px 2px 0px #FFFFFF', fontWeight: 600}}>
                                    Navigation
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF' }}>
                                    Need directions? Just click or scan the magical QR code below to lead you straight to the celebration! 
                                </Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
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
                                </Box>
                                <Typography variant="h6" sx={{ color: '#670d2f', fontFamily: '"Quintessential", serif', textShadow: '3px 2px 0px #FFFFFF' }}>
                                    We can’t wait to see you there!
                                </Typography>
                            </Box>
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
