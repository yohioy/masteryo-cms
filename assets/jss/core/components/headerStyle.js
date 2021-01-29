import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
  userProfileIconButtonColor
} from "assets/jss/material-cms-kit";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: grayColor[7],
    borderWidth: "0px 0px 1px 0px ",
    borderStyle: "solid",
    borderColor: grayColor[5],
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
  },
  container: {
    ...container,
    minHeight: "50px",
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    letterSpacing: "unset",
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  iconButton: {
    padding: "2px"
  },
  avatarButton: {
    backgroundColor: userProfileIconButtonColor,
    border: "3px solid",
    "&:hover,&:focus": {
      borderColor: grayColor[5],
    },
  },
  profileSummary: {
    padding: "20px",
    "& h4": {
      fontSize: "18px"
    }
  },
  profileSummaryList: {
    fontSize: "14px"
  },
  appResponsive: {
    top: "8px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
});

export default headerStyle;
