import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
// core components
import Button from "components/CustomButtons/Button.js";
import useWindowSize from "components/Hooks/useWindowSize.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import useStyles from "./navbarLinks.styles";

export default function NavbarLinks() {
  const size = useWindowSize();

  const classes = useStyles();

  const [openNotification, setOpenNotification] = React.useState(null);
  const [openProfile, setOpenProfile] = React.useState(null);

  const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  const handleCloseNotification = () => {
    setOpenNotification(null);
  };
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  return (
    <div>
        <div className={classes.manager}>
            <CustomDropdown
                navDropdown
                dropdownHeader="User Settings"
                buttonText="User"
                buttonIcon="person"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                notifications={{ total: 2 }}
                dropdownList={[
                  "Profile",
                  "Security Settings",
                  { divider: true },
                  "Logout"
                ]}
            />
        </div>
        <div className={classes.manager}>
            <CustomDropdown
                navDropdown
                dropdownHeader="Details"
                buttonText="Notifications"
                buttonIcon="notifications"
                buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                }}
                notifications={{ total: 5 }}
                dropdownList={[
                    "You have 5 new tasks",
                    "Another One",
                    "Another Notification"
                ]}
            />
        </div>

    </div>
  );
}
