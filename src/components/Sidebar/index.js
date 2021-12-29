import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";

// core components
import CustomListItem from "../../components/Sidebar/CustomListItem";
import BrandLogoContainer from "../../components/Sidebar/BrandLogoContainer";

import useStyles from "./sidebar.styles";

export default function Sidebar(props) {

    const classes = useStyles();

    const { logo, logoText, routes } = props;

    const links = (
        <div className={classes.sidebarWrapper}>
            <List component="nav" className={classes.root} data-testid="list">
                {routes.map((item, key) => {
                    return (
                        <CustomListItem button item={item} key={key}/>
                    )
                })}
            </List>
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
                    data-testid="mobile-drawer"
                    role="hidden-drawer-element">
                    <BrandLogoContainer logoText={logoText} />
                    {links}

                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor="left"
                    variant="permanent"
                    open
                    classes={{paper: classes.drawerPaper}}
                    data-testid="large-drawer"
                    role="hidden-drawer-element">

                    <BrandLogoContainer logoText={logoText} />
                    {links}

                </Drawer>
            </Hidden>
        </div>
    );
}

Sidebar.propTypes = {
    handleDrawerToggle: PropTypes.func,
    logoText: PropTypes.string,
    routes: PropTypes.arrayOf(PropTypes.object),
    open: PropTypes.bool
};
