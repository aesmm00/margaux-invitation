import React from 'react';
import { CardMedia, Container, Grid, Paper, styled, Typography } from '@mui/material';
import firstProgram from '../asset/photo/program/2.png'; 
import secondProgram from '../asset/photo/program/3.png'; // Assuming you have a second image
import thirdProgram from '../asset/photo/program/4.png'; // Assuming you have a third image


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffe5f0 0%, #fff6e5 100%)',
  borderRadius: '20px',
  textAlign: 'center',
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

}));

const PartyDetails = () => {
    return (
        <Container maxWidth="2xl" mx>
            <StyledPaper elevation={3}>
              <StyledTitle variant="h2" gutterBottom>
                  Birthday Celebration Details
              </StyledTitle>

              <Grid container spacing={2} direction={'row'} alignItems={'center'} justifyContent={'center'}>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={firstProgram}
                          sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                      />
                  </Grid>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={secondProgram}
                          sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                      />
                  </Grid>
                  <Grid size={{ xl: 4, md: 6, xs: 12 }}>
                      <CardMedia
                          component="img"
                          alt="Birthday Celebration"
                          image={thirdProgram}
                          sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                      />
                      </Grid>
              </Grid>
            </StyledPaper>
        </Container>
    );
};

export default PartyDetails;