import React, { useRef } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

// core
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// layout for this page
import Admin from '../../components/Layout/Admin';

// lib
import { objectFields } from './lib/fields';

import {
  prodStatusOptions,
} from './lib/constants';

// styles
import styles from 'assets/jss/core/views/pageEditorStyle';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import MediaUploadTabs from '../../components/MediaUploadTabs';
import Button from '../../components/CustomButtons/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import getAllProducts from "../../lib/api/getAllProducts";

const useStyles = makeStyles(styles);

function PageCreate({ allProducts }) {
  // create styles for this component
  const classes = useStyles();
  const pageForm = useRef();
  const refRelatedPages = useRef();

  const relatedPageList = allProducts.map(item => {
    return { id: item.id, title: item.prodName };
  });

  const pageList = [...relatedPageList];
  pageList.push({ id: 'root', title: 'Root' });

  const dataObject = {};
  for (const property in objectFields) {
    dataObject[property] = objectFields[property].default;
  }

  const [fields, setFields] = React.useState(dataObject);
  const [selectedRelatedPages, setSelectedRelatedPages] = React.useState([]);
  const [saveStatus, setSaveStatus] = React.useState(false);

  const handleSubmit = async () => {
    const form = pageForm.current;

    const submittedFields = fieldMapper(form);

    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedFields)
    };

    const response = await fetch('http://localhost:5023/api/pages', options);

    if (response.ok === true) {
      setSaveStatus(true);
    }
  };

  const handleChangeRelatedPages = (event, values) => {
    const selected = values.map(item => {
      return item.id;
    });

    setSelectedRelatedPages(selected);
  };

  const fieldMapper = form => {
    let submittedFields = {};

    for (const property in objectFields) {
      submittedFields = {
        ...submittedFields,
        ...{ [property]: form[property].value }
      };
    }

    submittedFields = {
      ...submittedFields,
      ...{ relatedPages: JSON.stringify(selectedRelatedPages) }
    };
    console.log('submittedFields', submittedFields);

    return submittedFields;
  };

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <div>
      <form noValidate ref={pageForm}>
        <Grid
          container
          spacing={3}
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={12} lg={2} xl={3} />
          <Grid
            item
            xs={12}
            md={12}
            lg={8}
            xl={6}
            className={classNames(classes.container)}
          >
            {saveStatus ? <Alert severity="success">Page Saved</Alert> : null}

            <Button color="primary" size="lg" onClick={handleSubmit}>
              {' '}
              Save{' '}
            </Button>
            <Box title="Page Main" className={classes.boxContainer}>
              <TextField
                variant="outlined"
                id="pageName"
                label="Page Name"
                name="pageName"
                margin="dense"
                defaultValue={fields.pageName}
                required
                fullWidth
              />
              <TextField
                variant="outlined"
                id="strapLine"
                label="Strapline"
                name="strapLine"
                margin="dense"
                defaultValue={fields.strapLine}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="seoFriendlyLinkId"
                label="SEO Link"
                name="seoFriendlyLinkId"
                margin="dense"
                defaultValue={fields.seoFriendlyLinkId}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="customLink"
                label="Custom Link"
                name="customLink"
                margin="dense"
                defaultValue={fields.customLink}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="longDescription"
                label="Long Description"
                name="longDescription"
                margin="dense"
                defaultValue={fields.longDescription}
                multiline
                rows={8}
                fullWidth
              />
              <TextField
                variant="outlined"
                id="shortDescription"
                label="Short Description"
                name="shortDescription"
                margin="dense"
                defaultValue={fields.shortDescription}
                multiline
                rows={8}
                fullWidth
              />
            </Box>

            <Box title="Images" className={classes.boxContainer}>
              <Typography variant="subtitle2" component="h6">
                Images
              </Typography>
              <Divider className={classes.divider} />

              <Grid container spacing={2}>
                <Grid item>
                  <Paper variant="outlined" square>
                    <ButtonBase className={classes.image}>
                      <img
                        className={classes.img}
                        alt="complex"
                        src="https://via.placeholder.com/150"
                      />
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

              <Divider className={classes.divider} />

              <Grid container>
                <MediaUploadTabs />
              </Grid>
            </Box>

            <Box title="Page Settings" className={classes.boxContainer}>
              <Typography variant="subtitle2" component="h6">
                Page Settings
              </Typography>
              <Divider className={classes.divider} />

              <TextField
                id="pageStatus"
                name="pageStatus"
                select
                label="Page Status"
                defaultValue={fields.prodStatus}
                variant="outlined"
                margin="dense"
                fullWidth
              >
                {prodStatusOptions.map((option, index) => (
                  <MenuItem key={index} value={option.key}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box title="Related Pages" className={classes.boxContainer}>
              <Typography variant="subtitle2" component="h6">
                Related Pages
              </Typography>
              <Divider className={classes.divider} />
              <Autocomplete
                multiple
                id="relatedPages"
                name="relatedPages"
                ref={refRelatedPages}
                options={relatedPageList}
                onChange={handleChangeRelatedPages}
                getOptionLabel={option => option.title}
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
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Related Pages"
                    margin="dense"
                  />
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

export async function getServerSideProps() {
  const allProducts = await getAllProducts();

  return {
    props: {
      allProducts: allProducts
    }
  };
}

PageCreate.layout = Admin;

export default PageCreate;
