import React from 'react';
import { Box, Typography, Container, Paper, Grid as MuiGrid } from '@mui/material';
import { styled } from '@mui/material/styles';

const Grid = styled(MuiGrid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #fff0f5 0%, #e6f3ff 100%)',
  borderRadius: '20px',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const SymbolSection = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.7)',
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9em',
  },
}));

const PartyDetails = () => {
  const sevenSymbols = [
    {
      title: '7 Roses',
      symbols: '🌹'.repeat(7),
      description: 'Each rose symbolizes love and happiness for every year Margo has grown.'
    },
    {
      title: '7 Candles',
      symbols: '🕯️'.repeat(7),
      description: 'Seven bright candles to wish Margo a lifetime of joy and dreams come true.'
    },
    {
      title: '7 Stars',
      symbols: '⭐'.repeat(7),
      description: 'One star for each of Margo\'s shining years of smiles!'
    },
    {
      title: '7 Sanrio Friends',
      symbols: '🎀'.repeat(7),
      description: 'Special Sanrio friends to celebrate this magical day!'
    }
  ];

  return (
    <Container maxWidth="md">
      <StyledPaper elevation={3}>
        <ResponsiveTypography variant="h4" color="primary" gutterBottom>
          About the Party
        </ResponsiveTypography>

        <Box sx={{ my: 4, p: 2, bgcolor: 'rgba(255, 192, 203, 0.1)', borderRadius: 2 }}>
          <ResponsiveTypography variant="h6" color="secondary" gutterBottom>
            Saturday, May 25th, 2025
          </ResponsiveTypography>
          <ResponsiveTypography variant="h6" color="secondary" gutterBottom>
            2:00 PM - 5:00 PM
          </ResponsiveTypography>
          <ResponsiveTypography variant="h6" color="secondary" gutterBottom>
            123 Rainbow Lane
          </ResponsiveTypography>
        </Box>

        <ResponsiveTypography variant="h5" color="primary" sx={{ mb: 4 }}>
          Let's celebrate 7 wonderful years of Margo together! 🌸
        </ResponsiveTypography>

        <ResponsiveTypography variant="h4" color="primary" gutterBottom sx={{ mt: 6 }}>
          The Magic of 7! ✨
        </ResponsiveTypography>

        <Grid>
          {sevenSymbols.map((section, index) => (
            <Box key={index}>
              <SymbolSection>
                <ResponsiveTypography variant="h6" color="primary" gutterBottom>
                  {section.title}
                </ResponsiveTypography>
                <ResponsiveTypography variant="h4" gutterBottom>
                  {section.symbols}
                </ResponsiveTypography>
                <ResponsiveTypography variant="body1" color="text.secondary">
                  {section.description}
                </ResponsiveTypography>
              </SymbolSection>
            </Box>
          ))}
        </Grid>

        <Box sx={{ mt: 4 }}>
          <ResponsiveTypography variant="h6" color="primary">
            7 Wishes
          </ResponsiveTypography>
          <ResponsiveTypography variant="body1" sx={{ mt: 2 }}>
            Guests can write a wish for Margo — 7 wishes total will be shared at the party!
          </ResponsiveTypography>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default PartyDetails;
