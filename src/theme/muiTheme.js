import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#52c7b8',
      main: '#009688',
      dark: '#00675b',
      contrastText: '#000000',
    },
    secondary: {
      light: '#fff263',
      main: '#fbc02d',
      dark: '#00675b',
      contrastText: '#000000',
    },
    shape: {
        borderRadius: 8
    }
  },
});

export default theme;