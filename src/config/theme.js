import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';



const themeConfig = {
    "palette": {
        primary: pink,
        secondary: grey,
        contrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            default: '#f3f3f3'
        }
    },
    shadows: (new Array(25)).fill(''),
    "button": {
        "height": 40,
        "minWidth": 100
    },
    shape: {
        "borderRadius": 6,
    },
    typography: {
        fontFamily: [
            'Source Sans Pro',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
    overrides: {
        MuiButton: {
            root: {
              borderRadius: 6,
            }
          },
          MuiFormControl: {
              root: {
                  width: '100% !important'
              }
          }
    }
}

export default createMuiTheme(themeConfig);