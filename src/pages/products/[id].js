import React, { useRef } from 'react';
import Link from 'next/link';

/* MUI */
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

/* lib */
import { fieldMapping } from '../../lib/products/fieldMapping';
import getProduct from '../../lib/api/getProduct';
import getAllProducts from '../../lib/api/getAllProducts';

/* styles */
import styles from 'assets/jss/core/views/dashboardStyle.js';

/* Components */
import Admin from '../../components/Layout/Admin';
import ProductDetails from '../../components/ProductDetails';

const useStyles = makeStyles(styles);

function PageUpdate({ data, allProducts }) {
  // create styles for this component
  const classes = useStyles();
  const prodStatus = 'draft';

  const dataObject = {};
  for (const property in fieldMapping) {
    dataObject[property] = data[fieldMapping[property]];
  }

  return (
    <div>
      Page ID : {data.id}
      <br />
      <Box className={classes.tableMenuContainer}>
        <ProductDetails
          data={dataObject}
          allProducts={allProducts}
          prodStatus={prodStatus}
        />
      </Box>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const productDetails = await getProduct(id);
  const allProducts = await getAllProducts();

  return {
    props: {
      data: productDetails,
      allProducts: allProducts
    }
  };
}

PageUpdate.layout = Admin;

export default PageUpdate;
