import { Theme, createMuiTheme } from '@material-ui/core/styles';

export const THEME_MUI: Theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFFFFF',
    },
    primary: { main: '#5C5F58', dark: '#F67C27' },
    secondary: { light: '#B73225', main: '#B73225', dark: '#3b4e4f' },
    error: { main: '#B73225' },
    success: { main: '#90ee90' },
    text: { primary: '#5C5F58', secondary: '#B73225' },
  },
  typography: {
    fontFamily: ['Karla', 'sans-serif'].join(','),
  },
});

THEME_MUI.overrides = {
  ...THEME_MUI.overrides,
  MuiTypography: {
    root: {
      letterSpacing: '0.03rem',
    },
  },
  MuiFilledInput: {
    root: {
      letterSpacing: '0.03rem',
      color: THEME_MUI.palette.secondary.dark,
      backgroundColor: 'rgba(113, 128, 150, 0.07)',
      '&:hover': {
        backgroundColor: 'rgba(113, 128, 150, 0.1)',
      },
      '&$focused': {
        backgroundColor: 'rgba(113, 128, 150, 0.09)',
      },
      paddingRight: '0 !important',
    },
  },
  MuiInputAdornment: {
    positionEnd: {
      position: 'absolute',
      right: 0,
    },
  },
} as typeof THEME_MUI.overrides;
