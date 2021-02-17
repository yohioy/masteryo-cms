import {
    container,
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    roseColor,
    blackColor,
    grayColor,
    purpleColor,
    themeColorPurple
} from "assets/jss/material-cms-kit";

const tabStyle = (theme) => ({
    root: {
        flexGrow: 1,
        color: primaryColor,
    },
    tabsHeader: {
        boxShadow: "none"
    },
    tabs: {
        backgroundColor: whiteColor,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: grayColor[4],
    },
    tab: {
        color: primaryColor[1]
    }
});


export default tabStyle;