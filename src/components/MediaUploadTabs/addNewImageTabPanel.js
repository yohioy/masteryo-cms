import React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useStyles from "./mediaUploadTabs.styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

// icons
import {
    CloudUpload as CloudUploadIcon,
    AddPhotoAlternateOutlined as AddPhotoAlternateOutlinedIcon,
    Close as CloseIcon
} from "@material-ui/icons";

// lab
import Alert from '@material-ui/lab/Alert';

// components
import Button from "../CustomButtons/Button";
import CustomSnackbars from "../CustomSnackbars";


export default function AddNewImageTabPanel(props) {
    const { children, value, index, ...other } = props;

    // create styles for this component
    const classes = useStyles();

    const [selectedFile, setSelectedFile] = React.useState('');
    const [uploadStatus, setUploadStatus] = React.useState(false);
    const [isSelected, setIsSelected] = React.useState(false);
    const [imageType, setImageType] = React.useState('draft');
    const [openAlertBox, setOpenAlertBox] = React.useState(true);

    const imageTypes = [
        { key: 'header', value: 'Header' },
        { key: 'featured', value: 'Featured' },
        { key: 'profile', value: 'Profile' },
        { key: 'blog', value: 'Blog' },
    ];


    const handleImageTypeChange = (event) => {
        setImageType(event.target.value);
    };

    const handleSubmission = async () => {
        if(selectedFile) {
            const formData = new FormData();
            formData.append('image_file', selectedFile);
            formData.append('image_type', imageType);

            const response = await fetch('http://localhost:5024/api/media/', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if(data.code === 200) {
                setUploadStatus(true);
            }

            console.log(data);
        } else {
            console.log('No file selected');
        }
    };


    const handleSelectImageChange = async (event) => {
        const selection = event.target.files;

        setIsSelected(true);
        setOpenAlertBox(true);
        setSelectedFile(selection[0]);
    };

    const handleUnselectImage = async () => {

        console.log(isSelected);
        console.log(selectedFile);
        console.log(isSelected);

        setOpenAlertBox(false);
        setIsSelected(false);
        setSelectedFile('');
    };


    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
                        <Grid item xs={12} className={classNames(classes.container)}>
                            <TextField
                                id="imageType"
                                select
                                label="Image Type"
                                value={imageType}
                                onChange={handleImageTypeChange}
                                variant="outlined"
                                margin="dense"
                                fullWidth
                            >
                                {imageTypes.map((option,index) => (
                                    <MenuItem key={index} value={option.key}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <div>
                                <input accept="image/*" className={classes.input} id="button-select-file" type="file" onChange={handleSelectImageChange} hidden />

                                {isSelected ? (
                                    // <Alert severity="info">Selected file: { selectedFile.name }</Alert>
                                    <Collapse in={openAlertBox}>
                                    <Alert severity="info" action={
                                        <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={handleUnselectImage}
                                        >
                                        <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                    >
                                    Selected file: { selectedFile.name }
                                    </Alert>
                                    </Collapse>
                                ) : null
                                }

                                {uploadStatus ? (
                                    <Alert severity="success"> Upload Successful </Alert>
                                ) : null
                                }

                                <label htmlFor="button-select-file">
                                    <Button color="transparent" size="large" component="span" startIcon={<AddPhotoAlternateOutlinedIcon />} >
                                        Select Image
                                    </Button>
                                </label>
                            </div>
                            {isSelected ? (
                            <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} onClick={handleSubmission}>
                                Upload
                            </Button>
                            ) : null
                            }
                        </Grid>
                    </Grid>
                </Box>
            )}
        </div>
    );
}

AddNewImageTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};