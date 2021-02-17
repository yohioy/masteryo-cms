import React from 'react';
import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Box from "@material-ui/core/Box";

import useStyles from "./copyright.styles";

export default function Copyright() {

    const classes = useStyles();

    return (
        <Box mt={8} className={classes.footerContainer}>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <MuiLink role="footer-link" color="inherit" href="https://masteryocms.co.uk" data-testid="website">
                    Your Website
                </MuiLink>{' | '}
                <MuiLink role="footer-link" color="inherit" data-testid="tech" href="/tech">
                    Tech
                </MuiLink>{' | '}
                <MuiLink role="footer-link" color="inherit" data-testid="about" href="/about">
                    About
                </MuiLink>{' | '}
                <span data-testid="year">{new Date().getFullYear()}</span>
                {'.'}
            </Typography>
        </Box>
    );
}