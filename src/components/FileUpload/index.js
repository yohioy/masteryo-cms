import React from "react";
import PropTypes from "prop-types";

/* core */
import Button from "@material-ui/core/Button";

/* icons */
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import HighlightOff from '@material-ui/icons/HighlightOff';

/* styles */
import useStyles from "./fileUpload.styles";

function FileUpload(props) {

    // create styles for this component
    const classes = useStyles();

    const { fileType } = props;

    let acceptType;

    switch (fileType) {
        case 'image':
            acceptType = `${fileType}/*`;
            break;
        case 'pdf':
            acceptType = '';
            break;
    }

    return (
        <div>
            <input accept={acceptType} className={classes.input} id="contained-button-file" multiple type="file" style={{ display: "block" }}/>
            <label htmlFor="contained-button-file">
                <Button variant="text" color="primary" component="span" startIcon={<PhotoCamera />} >
                    Upload {fileType}
                </Button>
            </label>
            <Button variant="text" color="secondary" component="span" startIcon={<HighlightOff />} >
                Delete {fileType}
            </Button>

        </div>
    );
}

FileUpload.propTypes = {
    fileType: PropTypes.string,
    buttonLabel: PropTypes.string
};

export default FileUpload;
