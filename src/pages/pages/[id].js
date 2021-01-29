import React from "react";

import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

// layout for this page
import Admin from "../../components/Layout/Admin";
import PageDetail from "../../components/PageDetail";

import styles from "assets/jss/core/views/dashboardStyle.js";

import axios from "axios";

const useStyles = makeStyles(styles);


function PageDetails({ data }) {

    // create styles for this component
    const classes = useStyles();

    return (
        <div>
            Page ID : {data.id}
            <br/>
            <Box className={classes.tableMenuContainer}>
                <PageDetail data={data} />
            </Box>
        </div>
    );
}

export async function getServerSideProps(context) {

    const { id } = context.params;

    const response = await fetch(`http://localhost:5023/api/pages/${id}`);
    const { data } = await response.json();

    return {
        props: {
            data: data
        }
    }
}

PageDetails.layout = Admin;

export default PageDetails;
