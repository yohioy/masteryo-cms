import { themeColorPurple, title } from "assets/jss/material-cms-kit";

const pageChangeStyle = () => ({
    progress: {
        color: themeColorPurple[4],
        width: "5rem !important",
        height: "5rem !important",
    },
    wrapperDiv: {
        margin: "100px auto",
        padding: "0px",
        maxWidth: "360px",
        textAlign: "center",
        position: "relative",
        zIndex: "9999",
        top: "0",
    },
    iconWrapper: {
        display: "block",
    },
    title: {
        ...title,
        color: "#FFFFFF",
    },

});

export default pageChangeStyle;
