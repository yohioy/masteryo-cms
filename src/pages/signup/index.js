import React from 'react';

/* core */
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

/*layout for this page*/
import Admin from '../../components/Layout/Admin';

/* styles */
import useStyles from './signup.styles';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Button from "../../components/CustomButtons/Button";

function Index() {

    const classes = useStyles();

    const handleSubmit = async () => {

    }

  return (
    <div>
      Signup
        <Grid
            container
            spacing={3}
            justify="flex-start"
            alignItems="flex-start"
        >
            <Grid item xs={12} md={12} lg={2} xl={3} />
            <Grid
                item
                xs={12}
                md={12}
                lg={8}
                xl={6}
                className={classNames(classes.container)}
            >
            <Box title="signup" component={Paper} className={classes.boxContainer}>
                <TextField
                    variant="outlined"
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    margin="dense"
                    required
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    margin="dense"
                    required
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    id="email"
                    label="Email"
                    name="email"
                    margin="dense"
                    required
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    id="password"
                    label="Password"
                    name="password"
                    margin="dense"
                    type="password"
                    required
                    fullWidth
                />

                <Button color="primary" size="lg" onClick={handleSubmit}>
                    {' '}
                    Signup{' '}
                </Button>
            </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={2} xl={3} />
        </Grid>
    </div>
  );
}

Index.layout = Admin;

export default Index;
