import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2563EB',
    },
    secondary: {
      main: '#7C3AED',
    },
    background: {
      default: '#F8FAFC',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
