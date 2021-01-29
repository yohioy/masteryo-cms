import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

// @material-ui/core components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import Hidden from "@material-ui/core/Hidden";
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grow from '@material-ui/core/Grow';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import ListItemIcon from "@material-ui/core/ListItemIcon";

// @material-ui/icons
import {
    Menu as MenuIcon,
    Person as PersonIcon,
    ExitToApp as ExitToAppIcon
} from "@material-ui/icons";

// core components
// import NavbarLinks from "./NavbarLinks";
// import Button from "../../components/CustomButtons/Button.js";

import useStyles from "./navbar.styles";

export default function Navbar(props) {
    // used for checking current route
    const router = useRouter();

    // create styles for this component
    const classes = useStyles();


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    function headerTitle() {
        let name = '';

        props.routes.map((prop) => {
            if (router.route.indexOf(prop.path) !== -1) {
                name = prop.name;
            }
            return null;
        });
        return name;
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <Typography variant="h1" color="inherit" className={classes.title}>
                        {headerTitle()}
                    </Typography>
                </div>
                <Hidden smDown implementation="css">
                    <IconButton className={classes.iconButton} onClick={handleToggle} ref={anchorRef}>
                        <Avatar alt="Yo" src="/broken-image.jpg" className={classes.avatarButton} />
                    </IconButton>
                    <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                                <Paper>
                                    <Grid container alignItems="center" className={classes.profileSummary}>
                                        <Grid item xs={12}>
                                            <Typography gutterBottom variant="h4">
                                                Yohantha Gunawarna
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow">
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon className={ classes.itemIcon }>
                                                    <Avatar className={classes.avatarButton} >
                                                        <PersonIcon />
                                                    </Avatar>
                                                </ListItemIcon>
                                                <Typography className={ classes.profileSummaryList }>
                                                    My Account
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon className={ classes.itemIcon }>
                                                    <Avatar className={classes.avatarButton} >
                                                        <ExitToAppIcon />
                                                    </Avatar>
                                                </ListItemIcon>
                                                <Typography className={ classes.profileSummaryList }>
                                                    Logout
                                                </Typography>
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Hidden>
                <Hidden mdUp implementation="css">
                    <IconButton color="inherit" aria-label="open drawer" onClick={props.handleDrawerToggle} >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

Navbar.propTypes = {
    handleDrawerToggle: PropTypes.func,
    routes: PropTypes.arrayOf(PropTypes.object),
};
