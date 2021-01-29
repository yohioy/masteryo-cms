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

const customTableContainerStyle = () => ({
    tableMenuContainer: {
        margin: "0 0 -1px 0",
        border: "1px solid",
        borderColor: grayColor[10],
        borderRadius: "0",
        boxShadow: "none",
        padding: "5px 15px",
        "& p": {
            fontSize: "14px"
        },
    },
    tableContainer: {
        margin: "-1px 0 0 0",
        boxShadow: "none",
        borderRadius: "0",
        border: "1px solid",
        borderColor: grayColor[10],
    },
    tableMenuItem: {
        margin: "0 20px 0 0",
        textTransform: "none"
    },
    rowHeaderCell: {
        padding: "2px",
        color: purpleColor,
        borderColor: purpleColor
    },
    rowBodyCell: {
        padding: "2px"
    },
    rowEditButton: {
        color: roseColor[2],
    },
    rowDeleteButton: {
        color: grayColor[2],
    },
    btnPublished: {
        color: successColor[1]
    },
    btnUnpublished: {
        color: warningColor[1]
    },
    btnDelete: {
        color: dangerColor[1]
    },
    btnUnselect: {
        color: infoColor[1]
    },
    paginationContainer: {
        margin: "20px 0",
    },
    paginationFooterInfo: {
        fontSize: "14px",
    },
    menuPerPage: {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: grayColor[1],
        fontTransform: "none",
        margin: "0 10px 0 0",
        color: grayColor[1],
        padding: "3px 8px"
    },
    selectedRowCount: {
        backgroundColor: roseColor[0],
        color: whiteColor,
        fontWeight: "600"
    },
    iconButtonSearch: {
        border: "0",
        padding: "0"
    },
    searchButton: {
        backgroundColor: themeColorPurple[1],
    }

});

export default customTableContainerStyle;
