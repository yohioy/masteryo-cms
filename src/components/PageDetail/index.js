import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/* core */
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";

/* lab */
import Autocomplete from '@material-ui/lab/Autocomplete';

/* icons */
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


import FileUpload from "../../components/FileUpload";
import Button from '../../components/CustomButtons/Button';
import MediaUploadTabs from '../../components/MediaUploadTabs';

/* styles */
import useStyles from "./pageDetail.styles";

function PageDetail(props) {

    // create styles for this component
    const classes = useStyles();

    const { data } = props;

    const [pageStatus, setPageStatus] = React.useState('draft');

    const pageStatusOptions = [
        { key: "publish", value: "Publish" },
        { key: "draft", value: "Draft" },
        { key: "future", value: "Future" },
        { key: "pending", value: "Pending" },
        { key: "private", value: "Private" },
        { key: "trash", value: "Trash" }
    ];

    const pageMenuPositions = [
        { key: 'header', value: 'Header Menu' },
        { key: 'footer', value: 'Footer Menu' },
        { key: 'side', value: 'Side Menu' }
    ];

    const top100Films = [
        { title: 'The Shawshank Redemption', year: '1994' },
        { title: 'The Godfather', year: '1972' },
        { title: 'The Godfather: Part II', year: '1974' },
        { title: 'The Dark Knight', year: '2008' },
        { title: '12 Angry Men', year: '1957' },
        { title: "Schindler's List", year: '1993' },
        { title: 'Pulp Fiction', year: '1994' }
    ];

    const handleStatusChange = (event) => {
        setPageStatus(event.target.value);
    };

    const handleParentPageChange = (event, newValue) => {
        console.log(newValue);
    };
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <form noValidate>
            <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
                <Grid item xs={12} md={12} lg={2} xl={3} />
                <Grid item xs={12} md={12} lg={8} xl={6} className={classNames(classes.container)}>
                    <Box className={classes.boxContainer}>
                        <TextField variant="outlined" id="pageName" label="Page Name" name="dataTableSearch" margin="dense" defaultValue={data.pageName} required fullWidth />
                        <TextField variant="outlined" id="pageStrapline" label="Strapline" name="pageStrapline" margin="dense" defaultValue={data.pageStrapline} fullWidth />
                        <TextField variant="outlined" id="pageDescription" label="Description" name="pageDescription" margin="dense" defaultValue={data.pageDescription} multiline rows={8} fullWidth />
                    </Box>
                    <Box className={classes.boxContainer}>
                        <Typography variant="subtitle2" component="h6">Images</Typography>
                        <Divider className={classes.divider}/>

                        <Grid container spacing={2}>
                            <Grid item>
                                <Paper variant="outlined" square>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src="https://via.placeholder.com/150" />
                                    </ButtonBase>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography variant="body2" gutterBottom>
                                            Full resolution 1920x1080 • JPEG
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Divider className={classes.divider}/>

                        <Grid container>
                            <MediaUploadTabs />
                        </Grid>
                    </Box>

                    <Box className={classes.boxContainer}>
                        <Typography variant="subtitle2" component="h6">Page Settings</Typography>
                        <Divider className={classes.divider}/>
                        <Autocomplete
                            id="parentPage"
                            name="parentPage"
                            options={top100Films}
                            getOptionLabel={(option) => option.title}
                            value={data.parentPage}
                            onChange={handleParentPageChange}
                            renderInput={(params) => <TextField {...params} label="Parent Page" variant="outlined" margin="dense"  />}
                        />

                        <TextField
                            id="displayMenuLocation"
                            select
                            label="Display Menu Location"
                            value=""
                            onChange={handleStatusChange}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                        >
                            {pageMenuPositions.map((option,index) => (
                                <MenuItem key={index} value={option.key}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="pageStatus"
                            select
                            label="Page Status"
                            value={pageStatus}
                            onChange={handleStatusChange}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                        >
                            {pageStatusOptions.map((option,index) => (
                                <MenuItem key={index} value={option.key}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField variant="outlined" id="pagePosition" label="Page Position" name="pagePosition" margin="dense" defaultValue={data.pagePosition} fullWidth />
                    </Box>
                    <Box className={classes.boxContainer}>
                        <Typography variant="subtitle2" component="h6">Meta Data</Typography>
                        <Divider className={classes.divider}/>
                        <TextField
                            id="metaDescription"
                            name="metaDescription"
                            label="Meta Description"
                            margin="dense"
                            multiline
                            rows={4}
                            defaultValue={data.metaDescription}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            id="metaKeywords"
                            name="metaKeywords"
                            label="Meta Keywords"
                            margin="dense"
                            multiline
                            rows={4}
                            defaultValue={data.metaKeywords}
                            variant="outlined"
                            fullWidth
                        />
                    </Box>

                    <Box className={classes.boxContainer}>
                        <Typography variant="subtitle2" component="h6">Related Pages</Typography>
                        <Divider className={classes.divider}/>
                        <Autocomplete
                            multiple
                            id="checkboxes-tags-demo"
                            options={top100Films}
                            disableCloseOnSelect
                            getOptionLabel={(option) => option.title}
                            renderOption={(option, { selected }) => (
                                <React.Fragment>
                                    <Checkbox
                                        icon={icon}
                                        checkedIcon={checkedIcon}
                                        style={{ marginRight: 8 }}
                                        checked={selected}
                                    />
                                    {option.title}
                                </React.Fragment>
                            )}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" label="Pages" placeholder="Pages" />
                            )}
                        />
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
}

PageDetail.propTypes = {
    data: PropTypes.object
};

export default PageDetail;
