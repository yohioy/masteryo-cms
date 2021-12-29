import React from 'react';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import useStyles from './copyright.styles';

export default function Copyright() {
  const classes = useStyles();

  return (
    <Box mt={8} className={classes.footerContainer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <MuiLink
          color="inherit"
          href="https://material-ui.com/"
          data-testid="your-website"
        >
          Your Website
        </MuiLink>
        {' | '}
        <MuiLink color="inherit" href="/tech" data-testid="tech">
          Tech
        </MuiLink>
        {' | '}
        <MuiLink color="inherit" href="/about">
          About
        </MuiLink>
        {' | '}
        {new Date().getFullYear()}
        {'.'}
        <Link href="/accessibility/">
          <a data-testid="accessibility">Accessibility</a>
        </Link>
        {' | '}
        <Link href="/privacy/">
          <a data-testid="privacy">Privacy</a>
        </Link>
        {' | '}
        <Link href="/terms-conditions/">
          <a data-testid="terms">Terms and Conditions</a>
        </Link>
      </Typography>
    </Box>
  );
}
