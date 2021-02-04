import React, {useRef} from "react";
import PropTypes from "prop-types";

/* core */
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

/* icons */
import {
    CloudUpload as CloudUploadIcon,
    Search as SearchIcon,
    AddPhotoAlternateOutlined as AddPhotoAlternateOutlinedIcon
} from "@material-ui/icons";

// components
import Button from '../../components/CustomButtons/Button';

/* styles */
import useStyles from "./fileUpload.styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";


function FileUpload(props) {

    // create styles for this component
    const classes = useStyles();

    const [selectedFiles, setSelectedFiles] = React.useState({filesToUpload:[]});
    const [isSelected, setIsSelected] = React.useState(false);
    const [selectedList, setSelectedList] = React.useState('');
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

    const changeHandler = (event) => {
        const selection = event.target.files;

        setIsSelected(true);

        let selectedFiles;

        let filesToUpload = [];
        for(let i=0; i < selection.length; i++) {
            let selectedItem = selection[i];
            console.log(selectedItem);

            filesToUpload.push({
                uploadStatus: 'waiting',
                file: selectedItem
            });
        }
        selectedFiles = { filesToUpload: filesToUpload };
        setSelectedFiles(selectedFiles);

        console.log('selectedFiles',selectedFiles);

    };

    const handleSubmission = async () => {
        let selectedFilesCopy = Object.assign({}, selectedFiles);
        const { filesToUpload } = selectedFilesCopy;

        console.log('filesToUpload', filesToUpload);

        if(filesToUpload.length > 0) {
            //let copyItems = selectedFiles;

            for(let i=0; i < filesToUpload.length; i++) {
                const formData = new FormData();
                let selectedItem = filesToUpload[i];

                let selectedItemCopy = Object.assign({}, filesToUpload[i]);

                formData.append('myfile', selectedItem.file);

                const response = await fetch('http://localhost:5024/api/media/', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();

                if(data.code === 200) {
                    selectedFilesCopy.filesToUpload[i].uploadStatus = "success";

                    /*let nl = {
                        ...selectedItem,
                        ...{uploadStatus: 'success'}
                    };

                    selectedFilesCopyItems[i] = nl;*/

                    setSelectedFiles(selectedFilesCopy);

                    /*setSelectedFiles(
                        selectedFiles.map((el, key) => {
                            console.log('el',key);
                            if (key === i) {
                                return {...el, uploadStatus: 'success'}
                            } else {
                                return el;
                            }
                        })
                    )*/
                }

            }
            console.log('selectedFilesStatus',selectedFiles);


        } else {
            console.log('No file selected');
        }
    };

    return (
        <div>
            <form>
                <Box className={classes.container}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} direction="column" container alignItems="center" justify="center">
                            <input accept={acceptType} className={classes.input} id="button-file-select" multiple type="file" onChange={changeHandler} hidden />

                            {isSelected ? (
                                selectedFiles['filesToUpload'].map((item, index) => {
                                    let { uploadStatus, file } = item;
                                    return (
                                        <div key={index}>
                                            <p>Filename: {file.name} - { uploadStatus } </p>
                                        </div>
                                    )
                                })
                            ) : (
                                <Typography>Select files to upload</Typography>
                            )}

                            <div>
                                <label htmlFor="button-file-select">
                                    <AddPhotoAlternateOutlinedIcon className={classes.addPhotoIcon}/>
                                </label>
                            </div>
                        </Grid>
                    </Grid>
                </Box>


                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} onClick={handleSubmission}>
                        Upload
                    </Button>
                </label>
            </form>

        </div>
    );
}

FileUpload.propTypes = {
    fileType: PropTypes.string
};

export default FileUpload;
