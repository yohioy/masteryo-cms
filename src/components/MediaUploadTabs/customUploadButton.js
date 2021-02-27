
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {AddPhotoAlternateOutlined as AddPhotoAlternateOutlinedIcon} from "@material-ui/icons";
import Button from "../CustomButtons/Button";

import useStyles from "./mediaUploadTabs.styles";


export default function CustomUploadButton(props) {
    const classes = useStyles();

    const { display } = props;

    console.log('display', display);

    return (
    <div className={classNames({[classes.uploadButtonContainer]: true, [classes.show]: display })}>
    <label htmlFor="button-select-file">
        <Button color="primary" size="md" component="span" startIcon={<AddPhotoAlternateOutlinedIcon />} >
            Select Image
        </Button>
    </label>
    </div>);
}

CustomUploadButton.propTypes = {
    display: PropTypes.bool,
};