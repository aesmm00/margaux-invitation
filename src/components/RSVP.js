import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, submitRSVP, addName, removeName } from '../redux/rsvpSlice';
import { Box, Typography, Container, Paper, TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, IconButton, Alert } from '@mui/material';
import { parseISO, isAfter } from 'date-fns';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #FFB6C1 0%, #E6F0FF 100%)',
  borderRadius: '30px',
  marginBottom: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontWeight: 500,
  marginBottom: theme.spacing(1),
  fontSize: '1.1rem',
  fontFamily: theme.typography.fontFamily,
}));

const StyledForm = styled('form')(({ theme }) => ({
  '& .MuiTextField-root, & .MuiFormControl-root': {
    marginBottom: theme.spacing(2),
  },
  '& .MuiRadio-root': {
    color: '#670d2f',
  },
  '& .MuiRadio-root.Mui-checked': {
    color: '#670d2f',
  },
  '& .MuiFormControlLabel-root': {
    marginLeft: 0,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#670d2f',
  '&:hover': {
    backgroundColor: '#4a0a22',
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Adelia", sans-serif',
  fontSize: '3rem',
  fontWeight: 500,
  textAlign: 'center',
  textShadow: '3px 2px 0px #FFFFFF',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: '#670d2f',
  fontFamily: '"Quintessential", serif',
  textShadow: '3px 2px 0px #FFFFFF',

}));

const RSVP = () => {
  const dispatch = useDispatch();
  const rsvpData = useSelector((state) => state.rsvp);
  const rsvpDeadline = '2025-07-18';
  const currentDate = new Date();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(submitRSVP()).unwrap();
    } catch (error) {
      console.error('Failed to submit RSVP:', error);
    }
  };

  // Check if RSVP period is closed
  const isRSVPClosed = isAfter(currentDate, parseISO(rsvpDeadline));

  if (isRSVPClosed) {
    return (
      <Container maxWidth="2xl">
        <StyledPaper elevation={3}>
          <Box sx={{
            background: 'linear-gradient(135deg, #ffe5f0 0%, #fff6e5 100%)', 
            padding: '3rem 2rem',
            borderRadius: '30px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',
          }}>
            <StyledTitle variant="h2" gutterBottom>
              RSVP Closed
            </StyledTitle>
            <StyledDescription>
              The RSVP period has ended. Thank you to everyone who has responded!
            </StyledDescription>
          </Box>
        </StyledPaper>
      </Container>
    );
  }

  if (rsvpData.submitted) {
    return (
      <Container maxWidth="2xl">
        <StyledPaper elevation={3}>
          <Box sx={{
          background: 'linear-gradient(135deg, #ffe5f0 0%, #fff6e5 100%)', 
            padding: '3rem 2rem',
            borderRadius: '30px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(255, 105, 180, 0.2)',
          }}>
            <StyledTitle variant="h2" gutterBottom>
              Thank you for your RSVP!
            </StyledTitle>
            {rsvpData.attending === 'yes' ? (
              <>
                <StyledDescription>
                  We can't wait to celebrate with you!
                </StyledDescription>
                <Typography variant="h1" sx={{ fontSize: '5rem', marginBottom: '1rem' }}>
                  🎉
                </Typography>
              </>
            ) : (
              <StyledDescription>
                We're sorry you can't make it, but thank you for letting us know.
              </StyledDescription>
            )}
          </Box>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container maxWidth="2xl">
      <StyledPaper elevation={3}>
        <Box sx={{ 
          background: 'linear-gradient(135deg, #ffe5f0 0%, #fff6e5 100%)', 
          borderRadius: '20px', 
          p: { xs: 2, sm: 4 },
          width: '100%',
          maxWidth: '500px'
        }}>
        <StyledTitle variant="h2" gutterBottom>
          Join the Fun – RSVP Now!
        </StyledTitle>
        <StyledDescription variant='h5'>
          Margo’s big day is almost here, and it wouldn’t be complete without you!
        </StyledDescription>
        <StyledDescription variant='body1' sx={{fontStyle: 'italic', color: 'red', fontWeight: 'bold'}} gutterBottom>
          RSVP Closes: July 18, 2025 - Don't Miss Your Chance!
        </StyledDescription>
        <Alert severity="info" variant='outlined' sx={{ mb: 3 }}>          
          NOTE: PLEASE REFER TO YOUR INVITATION OR FACEBOOK MESSAGE FOR THE NUMBER OF SEATS RESERVED FOR YOU (ADULTS AND KIDS). SEATS ARE LIMITED.
        </Alert>

        <StyledForm onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <SectionTitle>Guest Names:</SectionTitle>
            {rsvpData.adultNames.map((name, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <TextField
                  fullWidth
                  label={`Guest Name ${index + 1}`}
                  value={name}
                  onChange={(e) => dispatch(updateField({ field: 'adultNames', value: e.target.value, index }))}
                  required
                />
                {index > 0 && (
                  <IconButton 
                    onClick={() => dispatch(removeName({ field: 'adultNames', index }))}
                    sx={{ color: '#670d2f' }}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                )}
                {index === rsvpData.adultNames.length - 1 && (
                  <IconButton 
                    onClick={() => dispatch(addName({ field: 'adultNames' }))}
                    sx={{ color: '#670d2f' }}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </Box>
            ))}
          </Box>

          <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
            <SectionTitle>Are you bringing kids?</SectionTitle>
            <RadioGroup
              name="hasKids"
              value={rsvpData.hasKids.toString()}
              onChange={(e) => dispatch(updateField({ field: 'hasKids', value: e.target.value === 'true' }))}
            >
              <FormControlLabel value="true" control={<Radio />} label="Yes" />
              <FormControlLabel value="false" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          
          {rsvpData.hasKids && (
            <Box sx={{ mb: 3 }}>
              <SectionTitle>Kid Names:</SectionTitle>
              {rsvpData.kidNames.map((name, index) => (
              <Box key={index} sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <TextField
                  fullWidth
                  label={`Kid Name ${index + 1}`}
                  value={name}
                  onChange={(e) => dispatch(updateField({ field: 'kidNames', value: e.target.value, index }))}
                />
                {index > 0 && (
                  <IconButton 
                    onClick={() => dispatch(removeName({ field: 'kidNames', index }))}
                    sx={{ color: '#670d2f' }}
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                )}
                {index === rsvpData.kidNames.length - 1 && (
                  <IconButton 
                    onClick={() => dispatch(addName({ field: 'kidNames' }))}
                    sx={{ color: '#670d2f' }}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                )}
              </Box>
              ))}
            </Box>
          )}
          <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
            <SectionTitle>Will you attend?</SectionTitle>
            <RadioGroup
              name="attending"
              value={rsvpData.attending}
              onChange={handleInputChange}
              required
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes, I'll be there!" />
              <FormControlLabel value="no" control={<Radio />} label="Sorry, I can't make it" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={rsvpData.email}
            onChange={handleInputChange}
            type="email"
            required
            sx={{ mb: 2 }}
            helperText="We'll use this to send you event updates"
          />
          <TextField
            fullWidth
            label="Message for Margaux"
            name="message"
            value={rsvpData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
          />
          {rsvpData.error && (
            <Typography color="error" sx={{ mb: 2 }}>
              Error submitting RSVP. Please try again.
            </Typography>
          )}
          <StyledButton
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{ mt: 2 }}
            disabled={rsvpData.submitting}
          >
            {rsvpData.submitting ? 'Submitting...' : 'Confirm my attendance'}
          </StyledButton>
        </StyledForm>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default RSVP;
