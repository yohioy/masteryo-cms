import React from "react";
import classNames from "classnames";
import Link from "next/link";

// core
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

// layout for this page
import Admin from "../../components/Layout/Admin";

// lib
import { objectFields } from "./lib/fields";
import { validation } from "./lib/validation";
import { pageMenuPositions, pageStatusOptions, relatedPages } from "./lib/constants";

// styles
import styles from "assets/jss/core/views/pageEditorStyle";
import Button from "../../components/CustomButtons/Button";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import MediaUploadTabs from "../../components/MediaUploadTabs";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles(styles);


function PageCreate() {

    // create styles for this component
    const classes = useStyles();

    const dataObject = {};
    for(const property in objectFields) {
        dataObject[property] = objectFields[property].default;
    }

    const [fields, setFields] = React.useState(dataObject);

    const handleParentPageChange = (event, newValue) => {
        console.log(newValue);
    };

    const handleSubmit = (event) => {

    };


    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <div>
            <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
                    <Grid item xs={12} md={12} lg={2} xl={3} />
                    <Grid item xs={12} md={12} lg={8} xl={6} className={classNames(classes.container)}>
                        <Button color="primary" size="lg" type="submit"> Save </Button>
                        <Box title="Page Main" className={classes.boxContainer}>
                            <TextField variant="outlined" id="pageName" label="Page Name" name="pageName" margin="dense" defaultValue={fields.pageName} required fullWidth />
                            <TextField variant="outlined" id="pageStrapline" label="Strapline" name="pageStrapline" margin="dense" defaultValue={fields.pageStrapline} fullWidth />
                            <TextField variant="outlined" id="pageDescription" label="Description" name="pageDescription" margin="dense" defaultValue={fields.pageDescription} multiline rows={8} fullWidth />
                        </Box>

                        <Box title="Images" className={classes.boxContainer}>
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

                        <Box title="Page Settings" className={classes.boxContainer}>
                            <Typography variant="subtitle2" component="h6">Page Settings</Typography>
                            <Divider className={classes.divider}/>
                            <Autocomplete
                                id="parentPage"
                                name="parentPage"
                                options={relatedPages}
                                getOptionLabel={(option) => option.title}
                                defaultValue={fields.parentPage}
                                onChange={handleParentPageChange}
                                renderInput={(params) => <TextField {...params} label="Parent Page" variant="outlined" margin="dense"  />}
                            />

                            <TextField
                                id="displayMenuLocation"
                                name="displayMenuLocation"
                                select
                                label="Display Menu Location"
                                value={fields.menuLocation}
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
                                name="pageStatus"
                                select
                                label="Page Status"
                                value={fields.pageStatus}
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
                            <TextField variant="outlined" id="pagePosition" label="Page Position" name="pagePosition" margin="dense" defaultValue={fields.pagePosition} fullWidth />
                        </Box>

                        <Box title="Meta Data" className={classes.boxContainer}>
                            <Typography variant="subtitle2" component="h6">Meta Data</Typography>
                            <Divider className={classes.divider}/>
                            <TextField
                                id="metaDescription"
                                name="metaDescription"
                                label="Meta Description"
                                margin="dense"
                                multiline
                                rows={4}
                                defaultValue={fields.metaDescription}
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
                                defaultValue={fields.metaKeywords}
                                variant="outlined"
                                fullWidth
                            />
                        </Box>

                        <Box title="Related Pages" className={classes.boxContainer}>
                            <Typography variant="subtitle2" component="h6">Related Pages</Typography>
                            <Divider className={classes.divider}/>
                            <Autocomplete
                                multiple
                                id="relatedPages"
                                name="relatedPages"
                                options={relatedPages}
                                defaultValue={fields.relatedPages}
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
                    <Grid item xs={12} md={12} lg={2} xl={3} />
                </Grid>
            </form>
        </div>
    );
}


PageCreate.layout = Admin;

export default PageCreate;
