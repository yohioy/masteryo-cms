import { createMuiTheme } from '@material-ui/core/styles';
import {
    purpleColor,
    grayColor,
    roseColor,
    dangerColor,
    whiteColor
} from '../jss/material-cms-kit';


export default () => {

    // Create a theme instance.
    const theme = createMuiTheme({
        props: {
            MuiTypography: {
                variantMapping: {
                    subtitle1: 'p',
                    subtitle2: 'p',
                },
            },
        },
        palette: {
            primary: {
                main: '#5348d6',
                gray: grayColor[1],
            },
            secondary: {
                main: roseColor[0],
            },
            error: {
                main: dangerColor[0],
            },
            background: {
                default: whiteColor,
            },
        },
        typography: {
            fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
            h1: {
                fontSize: '2em',
                lineHeight: '1.15'
            },
            h2: {
                fontSize: '2.4em',
                lineHeight: '1.15'
            },
            h3: {
                fontSize: '1.825em',
                lineHeight: '1.15'
            },
            h4: {
                fontSize: '1.3em',
                lineHeight: '1.15'
            },
            h5: {
                fontSize: '1.25em',
                lineHeight: '1.15'
            },
            subtitle1: {
                fontSize: '1.25em',
                lineHeight: '1.15'
            },
            subtitle2: {
                fontSize: '1.15em',
                lineHeight: '1.15'
            }
        }
    });

    return theme
}
