import {
    defaultFont,
    dangerColor,
    whiteColor,
} from "assets/jss/material-cms-kit";

const notificationBadgeStyle = (theme) => ({
    notifications: {
        zIndex: "4",
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            top: "2px",
            border: "1px solid " + whiteColor,
            right: "4px",
            fontSize: "9px",
            background: dangerColor[0],
            color: whiteColor,
            minWidth: "16px",
            height: "16px",
            borderRadius: "10px",
            textAlign: "center",
            lineHeight: "16px",
            verticalAlign: "middle",
            display: "block",
        },
        [theme.breakpoints.down("sm")]: {
            ...defaultFont,
            fontSize: "14px",
            marginRight: "8px",
        },
    }
});

export default notificationBadgeStyle;
