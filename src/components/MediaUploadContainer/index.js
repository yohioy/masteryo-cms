import React, {useRef} from "react";

import Link from 'next/link'
import PropTypes from "prop-types";
import classNames from "classnames";

// @material-ui/core
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from '@material-ui/core/Checkbox';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Divider from '@material-ui/core/Divider';

// @material-ui/icons
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    CloudUpload as CloudUploadIcon,
    CloudOff as CloudOffIcon,
    SettingsBackupRestore as SettingsBackupRestoreIcon,
    Search as SearchIcon,
} from "@material-ui/icons";

// components
import Button from '../../components/CustomButtons/Button';

// styles
import useStyles from "./mediaUploadContainer.styles";

export default function MediaTableContainer (props) {

    // create styles for this component
    const classes = useStyles();

    const form = useRef(null)

    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState('');
    const [isSelected, setIsSelected] = React.useState(false);

    const handleChange = (event, value) => {

    };

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    };

    const handleSubmission = async () => {
        if(selectedFile) {
            const formData = new FormData();
            formData.append('myfile', selectedFile);

            const response = await fetch('http://localhost:5024/api/media/', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            console.log(data);
        } else {
            console.log('No file selected');
        }

    };

    const handleOpen = () => {
        setModalOpen(true);
    };

    const handleClose = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Button color="primary" size="large" startIcon={<CloudUploadIcon />} onClick={handleOpen}>
                Upload New Image
            </Button>
            <Modal
                className={classes.modal}
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen} className={classes.modalContainer}>
                    <Paper className={classes.paper} elevation={3}>
                        <div>
                            <div>
                                <form>
                                    <input accept="image/*" id="contained-button-file" multiple type="file" style={{ display: "block" }} onChange={changeHandler}/>
                                    {isSelected ? (
                                        <div>
                                            <p>Filename: {selectedFile.name}</p>
                                            <p>Filetype: {selectedFile.type}</p>
                                            <p>Size in bytes: {selectedFile.size}</p>
                                            <p>
                                                lastModifiedDate:{' '}
                                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                                            </p>
                                        </div>
                                    ) : (
                                        <p>Select a file to show details</p>
                                    )}
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" size="large" startIcon={<CloudUploadIcon />} onClick={handleSubmission}>
                                            Upload
                                        </Button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </Paper>
                </Fade>
            </Modal>
        </div>
    )
}

MediaTableContainer.propTypes = {
};