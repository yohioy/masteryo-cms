import {
    container,
    grayColor,
    primaryBoxShadow,
} from "assets/jss/material-cms-kit";

const fileUploadStyle = () => ({
    container: {
        ...container,
        ...primaryBoxShadow,
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "30px",
        paddingBottom: "30px"
    },
    addPhotoIcon: {
        fontSize: "130px"
    }
});

export default fileUploadStyle;
