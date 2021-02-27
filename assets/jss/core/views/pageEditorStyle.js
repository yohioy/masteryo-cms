import {
    container,
    grayColor,
    primaryBoxShadow
} from "assets/jss/material-cms-kit";

const pageDetailStyle = () => ({
    container: {
        transition: "all 150ms ease 0s",
        display: "block",
    },
    rightBorder: {
        borderColor: grayColor[5],
        borderRadius: "3px",
        borderWidth: "0px 1px 0px 0px ",
        borderStyle: "solid",
    },
    boxContainer: {
        ...primaryBoxShadow,
        margin: "20px 0",
        padding: "20px 20px 10px 20px",
        borderColor: grayColor[5],
        borderRadius: "3px",
        borderWidth: "1px",
        borderStyle: "solid",
    },
    divider: {
        margin: "10px 0"
    },
    image: {
        width: "150px",
        height: "150px",
        overflow: "hidden",
        "& img": {
            width: "100%"
        }
    }
});

export default pageDetailStyle;
