import React from 'react';

// layout for this page
import Admin from '../../components/Layout/Admin';
import CustomTableContainer from '../../components/CustomTableContainer';

function Products({ data, total }) {
  return (
    <div>
      Products page
      <CustomTableContainer rowData={data} total={total} />
    </div>
  );
}

export async function getServerSideProps() {
  let total = 0;
  let data = [];

  try {
    const response = await fetch(
      `http://localhost:3003/products/dev/categories `
    );
    const responseObject = await response.json();
    total = responseObject.total;
    data = responseObject.data;
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  return {
    props: {
      total: total,
      data: data
    }
  };
}

Products.layout = Admin;

export default Products;
