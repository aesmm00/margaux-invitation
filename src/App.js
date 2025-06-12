import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Welcome from './components/Welcome';
import PartyDetails from './components/PartyDetails';
import RSVP from './components/RSVP';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff66b2', // Sanrio pink
      light: '#ff99cc',
      dark: '#ff3399',
    },
    secondary: {
      main: '#66b3ff', // Light blue
      light: '#99ccff',
      dark: '#3399ff',
    },
    background: {
      default: '#fff0f5', // Light pink background
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", "Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Comic Sans MS", cursive',
    },
    h2: {
      fontFamily: '"Comic Sans MS", cursive',
    },
    h3: {
      fontFamily: '"Comic Sans MS", cursive',
    },
    h4: {
      fontFamily: '"Comic Sans MS", cursive',
    },
    h5: {
      fontFamily: '"Comic Sans MS", cursive',
    },
    h6: {
      fontFamily: '"Comic Sans MS", cursive',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #fff0f5 0%, #fff5fa 100%)',
        }}>
          <Navbar />
          <Box sx={{ 
            py: 2,
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: '2xl',
            mx: 'auto'
          }}>
            <Welcome />
            <PartyDetails />
            <RSVP />
          </Box>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
