/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

import GroupWork from '@material-ui/icons/GroupWork';

// core components
import CustomListItem from "../../components/Sidebar/CustomListItem";

import useStyles from "./sidebar.styles";

export default function Sidebar(props) {

    const classes = useStyles();

    const { logo, logoText, routes } = props;

    const linkWrapper = routes.map((item, key) => {
        return (
            <CustomListItem button item={item} key={key}/>
        )
    });

    const links = (
        <List component="nav" className={classes.root} >
            {linkWrapper}
        </List>
    );

    const brand = (
        <div className={classes.logo}>
            <a href="" className={classNames(classes.logoLink)} target="_blank">
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={3}>
                        <GroupWork fontSize="large"/>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <span className={classes.logoText}>{logoText}</span>
                    </Grid>
                </Grid>
            </a>
        </div>
    );
    return (
        <div>
            <Hidden mdUp implementation="css">
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={props.open}
                    classes={{paper: classes.drawerPaper}}
                    onClose={props.handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {brand}
                    <div className={classes.sidebarWrapper}>
                        {links}
                    </div>
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer anchor="left" variant="permanent" open classes={{paper: classes.drawerPaper}}>
                    {brand}
                    <div className={classes.sidebarWrapper}>{links}</div>
                </Drawer>
            </Hidden>
        </div>
    );
}

Sidebar.propTypes = {
    handleDrawerToggle: PropTypes.func,
    logoText: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
    open: PropTypes.bool,
};