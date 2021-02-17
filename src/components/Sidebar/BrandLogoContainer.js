import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import Grid from "@material-ui/core/Grid";

import GroupWork from '@material-ui/icons/GroupWork';

// core components
import useStyles from "./sidebar.styles";

export default function BrandLogoContainer(props) {

    const classes = useStyles();

    const { logo, logoText } = props;

    return (
        <div className={classes.logo}>
            <a href="" className={classNames(classes.logoLink)} target="_blank">
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={12} sm={3} data-testid="logo-image" role="logo-item">
                        <GroupWork fontSize="large" data-testid="logo-icon"/>
                    </Grid>
                    <Grid item xs={12} sm={9} data-testid="logo-text" role="logo-item">
                        <span className={classes.logoText}>{logoText}</span>
                    </Grid>
                </Grid>
            </a>
        </div>
    );
}

BrandLogoContainer.propTypes = {
    logoText: PropTypes.string,
    logo: PropTypes.string,
};