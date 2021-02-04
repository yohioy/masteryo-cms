import React from "react";
import Link from 'next/link'
import classNames from "classnames";

// @material-ui/core
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
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    Add as AddIcon,
    SettingsBackupRestore as SettingsBackupRestoreIcon,
    Search as SearchIcon,
} from "@material-ui/icons";

// @material-ui/lab
import Pagination from "@material-ui/lab/Pagination";

// components
import Admin from "../../components/Layout/Admin";
import Button from '../../components/CustomButtons/Button';

// styles
import customTableContainerStyle from "assets/jss/core/components/customTableContainerStyle";

const useStyles = makeStyles(customTableContainerStyle);

function Media (props) {

    // create styles for this component
    const classes = useStyles();

    const { total, rowData } = props;

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
            <Link href='/media/create'>
                <Button color="primary" size="large" startIcon={<AddIcon />}>
                    Add New Image
                </Button>
            </Link>
            <Box component={Paper} className={classes.tableMenuContainer}>
                <form noValidate>
                    <Grid container spacing={1} direction="row" justify="flex-start" alignItems="center">
                        <Grid item xs={9} sm={10} md={10} lg={11} container>
                            <TextField
                                variant="outlined"
                                id="dataTableSearch"
                                label="Search"
                                name="dataTableSearch"
                                margin="dense"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3} sm={2} md={2} lg={1} container>
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
                <Grid container spacing={1}  direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6} alignContent="flex-end">
                        <Badge badgeContent={selectedCount} color="secondary" className={classes.tableMenuItem}>
                            <Typography>Rows Selected</Typography>
                        </Badge>
                    </Grid>
                    <Grid item xs={12} sm={6} container justify="flex-end">
                        <Button disabled={btnDisabled} color="transparent" simple={true} size="small" startIcon={<SettingsBackupRestoreIcon className={classes.btnUnselect} />} className={classes.tableMenuItem}>
                            Unselect All
                        </Button>
                        <Button disabled={btnDisabled} color="transparent" simple={true} size="small" startIcon={<DeleteIcon className={classes.btnDelete} />} className={classes.tableMenuItem}>
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box component={Paper} className={classes.tableContainer}>
                <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.rowHeaderCell}></TableCell>
                                <TableCell className={classes.rowHeaderCell}></TableCell>
                                <TableCell className={classes.rowHeaderCell}>ID</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Preview</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Name</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Size</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Height</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Width</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Mime Type</TableCell>
                                <TableCell className={classes.rowHeaderCell}>File Location</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Storage Type</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Description</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Created Date</TableCell>
                                <TableCell className={classes.rowHeaderCell}>Updated Date</TableCell>
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
                                            <Link href='/media/[id]' as={`/pages/${row.id}`}>
                                                <a className={ classes.listItemSub }>
                                                    <IconButton aria-label="edit">
                                                        <EditIcon fontSize="small" className={classes.rowEditButton}/>
                                                    </IconButton>
                                                </a>
                                            </Link>
                                        </TableCell>
                                        <TableCell component="th" scope="row" className={classes.rowBodyCell}>{row.id}</TableCell>
                                        <TableCell component="th" scope="row" className={classNames(classes.rowBodyCell,classes.imagePreviewCell)}>
                                            <img src={row.fileUrl} alt={row.fileUrl}/>
                                        </TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileName}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileSize}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileHeight}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileWidth}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileMimeType}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileLocation}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileStorageType}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.fileDescription}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.createdDate}</TableCell>
                                        <TableCell className={classes.rowBodyCell}>{row.modifiedDate}</TableCell>
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

export async function getServerSideProps() {

    const response = await fetch(`http://localhost:5024/api/media`);
    const { total, data } = await response.json();

    return {
        props: {
            total: total,
            rowData: data
        }
    }
}

Media.layout = Admin;

export default Media;
