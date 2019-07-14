import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: teal,
    secondary: {  main: '#ffa000' },
    shape: {
        borderRadius: 8
    }
  },
});

export default theme;