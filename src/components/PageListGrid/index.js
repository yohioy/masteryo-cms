import React from "react";

import Link from 'next/link'
import PropTypes from "prop-types";

/* core */
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from '@material-ui/core/Checkbox';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

// @material-ui/icons
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    CloudUpload as CloudUploadIcon,
    CloudOff as CloudOffIcon,
    SettingsBackupRestore as SettingsBackupRestoreIcon,
    Search as SearchIcon,
} from "@material-ui/icons";

// @material-ui/lab
import Pagination from "@material-ui/lab/Pagination";

import Button from '../../components/CustomButtons/Button';

// styles
import useStyles from "./pageListGrid.styles";

export default function PageListGrid (props) {

    // create styles for this component
    const classes = useStyles();

    const { rowData } = props;

    console.log(rowData);
    const perPageDefault = 10;
    const totalRecords = rowData.length;
    const totalPagesDefault = Math.ceil(rowData.length / perPageDefault);

    const [totalPages, setTotalPages] = React.useState(totalPagesDefault);
    const [perPage, setPerPage] = React.useState(perPageDefault);
    const [page, setPage] = React.useState(1);
    const [listStart, setListStart] = React.useState(page - 1);
    const [listEnd, setListEnd] = React.useState(perPageDefault);
    const [currentPageList, setCurrentPageList] = React.useState(rowData.slice(listStart, listEnd));
    const [selected, setSelected] = React.useState([]);
    const [selectedCount, setSelectedCount] = React.useState('0');
    const [btnDisabled, setBtnDisabled] = React.useState(true);

    const handleChange = (event, value) => {
        setPage(value);

        const startNumber = (perPage * value) - perPage;
        setListStart(startNumber);

        const endNumber = startNumber + perPage;
        setListEnd(endNumber);

        const totalPages = Math.ceil(rowData.length / perPage);
        setTotalPages(totalPages);

        setCurrentPageList(rowData.slice(startNumber, endNumber));
    };


    const handleRowClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
        setSelectedCount(String(newSelected.length));

        if(newSelected.length > 0){
            console.log('false',newSelected);
            setBtnDisabled(false);
        } else {
            console.log('true',newSelected);
            setBtnDisabled(true);
        }
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;


    return (
        <div>
        <Box component={Paper} className={classes.tableMenuContainer}>
            <form noValidate>
            <Grid container spacing={1}  direction="row"
                  justify="flex-start"
                  alignItems="center">
                <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            id="dataTableSearch"
                            label="Search"
                            name="dataTableSearch"
                            margin="dense"
                            fullWidth
                        />
                </Grid>
                <Grid item xs={6}>
                    <IconButton className={classes.iconButtonSearch}>
                        <Avatar className={classes.searchButton}>
                            <SearchIcon />
                        </Avatar>
                    </IconButton>
                </Grid>
            </Grid>
            </form>
        </Box>
        <Box component={Paper} className={classes.tableMenuContainer}>
            <List className={classes.tableControllerItem}>
                <ListItem><Typography>Rows Selected: {selectedCount}</Typography></ListItem>
                <ListItem>
                    <Button color="transparent" disabled={btnDisabled} size="md" startIcon={<SettingsBackupRestoreIcon className={classes.btnUnselect} />} className={classes.tableMenuItem}>
                        Unselect All
                    </Button>
                </ListItem>

                <ListItem>
                    <Button color="transparent" disabled={btnDisabled} size="md" startIcon={<CloudUploadIcon className={classes.btnPublished} />} className={classes.tableMenuItem}>
                        Publish
                    </Button>
                </ListItem>

                <ListItem>
                    <Button color="transparent" disabled={btnDisabled} size="md" startIcon={<CloudOffIcon className={classes.btnUnpublished} />} className={classes.tableMenuItem}>
                        Unpublish
                    </Button>
                </ListItem>

                <ListItem>
                    <Button color="transparent" disabled={btnDisabled} size="md" startIcon={<DeleteIcon className={classes.btnDelete} />} className={classes.tableMenuItem}>
                        Delete
                    </Button>
                </ListItem>
            </List>
        </Box>

        <Box component={Paper} className={classes.tableContainer}>
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.rowHeaderCell} align="right"></TableCell>
                        <TableCell className={classes.rowHeaderCell} align="right"></TableCell>
                        <TableCell className={classes.rowHeaderCell}>ID</TableCell>
                        <TableCell className={classes.rowHeaderCell}>Title</TableCell>
                        <TableCell className={classes.rowHeaderCell} align="right">Template</TableCell>
                        <TableCell className={classes.rowHeaderCell} align="right">Images</TableCell>
                        <TableCell className={classes.rowHeaderCell} align="right">Created Date</TableCell>
                        <TableCell className={classes.rowHeaderCell} align="right">Modified Date</TableCell>
                        <TableCell className={classes.rowHeaderCell} align="right">Page Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {currentPageList.map((row, index) => {
                        const isItemSelected = isSelected(row.id);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                            <TableRow key={row.id} role="checkbox" tabIndex={-1} hover selected={isItemSelected} >
                                <TableCell padding="checkbox" className={classes.rowBodyCell}>
                                    <Checkbox checked={isItemSelected} inputProps={{'aria-labelledby': labelId}} onChange={(event) => handleRowClick(event, row.id)}/>
                                </TableCell>
                                <TableCell className={classes.rowBodyCell}>
                                    <Link href='/pages/[id]' as={`/pages/${row.id}`}>
                                        <a className={ classes.listItemSub }>
                                    <IconButton aria-label="edit">
                                        <EditIcon fontSize="small" className={classes.rowEditButton}/>
                                    </IconButton>
                                        </a>
                                    </Link>
                                </TableCell>
                                <TableCell component="th" scope="row" className={classes.rowBodyCell}>{row.id}</TableCell>
                                <TableCell component="th" scope="row" className={classes.rowBodyCell}>{row.pageName}</TableCell>
                                <TableCell align="right" className={classes.rowBodyCell}>{row.template}</TableCell>
                                <TableCell align="right" className={classes.rowBodyCell}>{row.images}</TableCell>
                                <TableCell align="right" className={classes.rowBodyCell}>{row.createdDate}</TableCell>
                                <TableCell align="right" className={classes.rowBodyCell}>{row.modifiedDate}</TableCell>
                                <TableCell align="right" className={classes.rowBodyCell}>{row.pageStatus}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </Box>
        <div className={classes.paginationContainer}>
            <Grid container alignItems="center">
                <Grid item xs={6} alignContent="flex-end">
                    <Pagination count={totalPages} page={page} onChange={handleChange} color="primary"/>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.paginationFooterInfo} align="right">
                        Rows per page: {listStart + 1} - {listEnd} of {totalRecords}
                    </Typography>
                </Grid>
            </Grid>
        </div>
        </div>
    )
}

PageListGrid.propTypes = {
    rowHeaders: PropTypes.arrayOf(PropTypes.object),
    rowData: PropTypes.arrayOf(PropTypes.object),
    total: PropTypes.string,
};