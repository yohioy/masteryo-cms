import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    Add as AddIcon,
    CloudUpload as CloudUploadIcon,
    PhotoLibrary as PhotoLibraryIcon,
    AddPhotoAlternate as AddPhotoAlternateIcon
} from "@material-ui/icons";

// styles
import useStyles from "./mediaUploadTabs.styles";

import AddNewImageTabPanel from "./addNewImageTabPanel";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function SimpleTabs() {

    // create styles for this component
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.tabsHeader}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className={classes.tabs} indicatorColor="primary">
                    <Tab icon={<AddPhotoAlternateIcon />} label="Add New Image" {...a11yProps(0)} className={classes.tab} />
                    <Tab icon={<PhotoLibraryIcon />} label="Add Existing Image" {...a11yProps(1)} className={classes.tab} />
                </Tabs>
            </AppBar>

            <AddNewImageTabPanel value={value} index={0}/>

            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    );
}