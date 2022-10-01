import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/* core */
import {makeStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';

/* lab */
import Autocomplete from '@material-ui/lab/Autocomplete';

/* icons */
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import FileUpload from '../../components/FileUpload';
import Button from '../../components/CustomButtons/Button';

/* styles */
import styles from 'assets/jss/core/views/pageEditorStyle';
import Alert from '@material-ui/lab/Alert';
import MediaUploadTabs from '../MediaUploadTabs';
import {
  prodStatusOptions
} from '../../pages/products/lib/constants';

const useStyles = makeStyles(styles);

function ProductDetails(props) {
  // create styles for this component
  const classes = useStyles();

  const { data, allProducts, prodStatus} = props;
  const refRelatedPages = useRef();
  const productForm = useRef();

  const [currentProdStatus, setCurrentProdStatus] = React.useState(prodStatus);
  const [saveStatus, setSaveStatus] = React.useState(false);
  const [fields, setFields] = React.useState(data);
  const [selectedRelatedPages, setSelectedRelatedPages] = React.useState([]);

  const relatedPageList = allProducts.map(item => {
    return { id: item.id, title: item.prodName };
  });

  const pageList = [...relatedPageList];
  pageList.push({ id: 'root', title: 'Root' });

  const handleStatusChange = event => {
    setPageStatus(event.target.value);
  };

  const handleParentPageChange = (event, newValue) => {
    console.log(newValue);
  };

  const handleChangeRelatedPages = (event, values) => {
    const selected = values.map(item => {
      return item.id;
    });

    setSelectedRelatedPages(selected);
  };


  const fieldMapper = form => {
    let submittedFields = {};

    for (const property in data) {
      submittedFields = {
        ...submittedFields,
        ...{ [property]: form[property].value }
      };
    }

    submittedFields = {
      ...submittedFields,
      ...{ relatedPages: JSON.stringify(selectedRelatedPages) }
    };
    return submittedFields;
  };

  const handleSubmit = async () => {
    const form = productForm.current;

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

  /*const handleSubmit2 = event => {
    event.preventDefault();
    let submittedFields = {};

    for (const fieldItem in data) {
      if (event.target[fieldItem]) {
        submittedFields = {
          ...submittedFields,
          ...{ [fieldItem]: event.target[fieldItem].value }
        };
      }
    }

    console.log(submittedFields);
    setFields(submittedFields);
  };*/

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <form noValidate>
      <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
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
              id="prodName"
              label="Product Name"
              name="prodName"
              margin="dense"
              defaultValue={fields.prodName}
              required
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
              id="prodStatus"
              name="prodStatus"
              select
              label="Product Status"
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
  );
}

ProductDetails.propTypes = {
  data: PropTypes.object
};

export default ProductDetails;
