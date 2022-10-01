import React from 'react';

// layout for this page
import Admin from '../../components/Layout/Admin';
import PageListGrid from '../../components/PageListGrid';

function Pages({ data, total }) {
  return (
    <div>
      Pages page
      <PageListGrid rowData={data} total={total} />
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

Pages.layout = Admin;

export default Pages;
