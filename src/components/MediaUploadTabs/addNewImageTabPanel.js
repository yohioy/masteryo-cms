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
import Paper from '@material-ui/core/Paper';

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
import CustomUploadButton from "./customUploadButton";



export default function AddNewImageTabPanel(props) {
    const { children, value, index, ...other } = props;

    // create styles for this component
    const classes = useStyles();

    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [selectedFilesCount, setSelectedFilesCount] = React.useState(0);
    const [imageType, setImageType] = React.useState('');

    const imageTypes = [
        { key: 'header', value: 'Header' },
        { key: 'featured', value: 'Featured' },
        { key: 'profile', value: 'Profile' },
        { key: 'blog', value: 'Blog' },
    ];


    const handleImageTypeChange = (event) => {
        setImageType(event.target.value);
    };

    /*const handleSubmission = async () => {
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
                setUploadStatus('1');
            } else {
                setUploadStatus('2');
            }

            console.log(data);
        } else {
            console.log('No file selected');
        }
    };*/


    const handleSelectImageChange = async (event) => {
        const selection = event.target.files;

        console.log(selectedFiles);
        if(selection.length > 0) {
            let selectedImage = {
                imageType: imageType,
                imageName: selection[0].name,
                imageMimeType: selection[0].type,
                imageSize: selection[0].size
            };
            selectedFiles.push(selectedImage);
            setSelectedFiles(selectedFiles);
            setSelectedFilesCount(selectedFilesCount + 1);
        }
    };

    const handleUnselectImage = async (id) => {
        selectedFiles.splice(id, 1);
        setSelectedFiles(selectedFiles);
        setSelectedFilesCount(selectedFilesCount - 1);
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

                            {selectedFilesCount > 0 ? (
                                <Paper variant="outlined" className={classes.selectedFileDisplayContainer}>
                                    <Typography variant="subtitle2">Selected Files</Typography>

                                    {selectedFiles.map((item, index) => {
                                        return (
                                            <Alert key={index} severity="success" action={<IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => handleUnselectImage(index)}
                                            >
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>}>
                                                Type: { item.imageType }, Name: { item.imageName }
                                            </Alert>
                                        );
                                    })}
                                </Paper>
                            ) : null
                            }

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
                                <CustomUploadButton display={ imageType !== '' ? true : false } />

                            </div>
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