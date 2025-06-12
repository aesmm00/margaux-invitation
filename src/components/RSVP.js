import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, submitRSVP } from '../redux/rsvpSlice';
import { Box, Typography, Container, Paper, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffe5f0 0%, #fff6e5 100%)',
  borderRadius: '20px',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9em',
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  '& .MuiTextField-root, & .MuiFormControl-root': {
    marginBottom: theme.spacing(2),
  },
}));

const RSVP = () => {
  const dispatch = useDispatch();
  const rsvpData = useSelector((state) => state.rsvp);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitRSVP());
  };

  if (rsvpData.submitted) {
    return (
      <Container maxWidth="sm">
        <StyledPaper elevation={3}>
          <ResponsiveTypography variant="h4" color="primary" gutterBottom>
            Thank you for your RSVP!
          </ResponsiveTypography>
          <ResponsiveTypography variant="h6" color="secondary">
            We can't wait to celebrate with you!
          </ResponsiveTypography>
          <Box sx={{ mt: 4 }}>
            <ResponsiveTypography variant="h1">🎉</ResponsiveTypography>
          </Box>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <StyledPaper elevation={3}>
        <ResponsiveTypography variant="h4" color="primary" gutterBottom>
          RSVP
        </ResponsiveTypography>
        <ResponsiveTypography variant="h6" color="secondary" gutterBottom>
          Margo is turning 7! RSVP to be part of this super cute celebration! 🎀
        </ResponsiveTypography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={rsvpData.name}
            onChange={handleInputChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel>Will you attend?</InputLabel>
            <Select
              name="attending"
              value={rsvpData.attending}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="yes">Yes, I'll be there!</MenuItem>
              <MenuItem value="no">Sorry, I can't make it</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Number of Guests"
            name="numberOfGuests"
            type="number"
            value={rsvpData.numberOfGuests}
            onChange={handleInputChange}
            InputProps={{ inputProps: { min: 1, max: 5 } }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={rsvpData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send RSVP
          </Button>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default RSVP;
