import React from 'react';

/* lib */
import getAllProducts from '../../lib/api/getAllProducts';

/* Components */
import Admin from '../../components/Layout/Admin';
import ProdListGrid from '../../components/ProdListGrid';

function Products({ data, total }) {
  return (
    <div>
      Products page
      <ProdListGrid rowData={data} total={total} />
    </div>
  );
}

export async function getServerSideProps() {
  const total = 0;
  const data = await getAllProducts();

  return {
    props: {
      total: total,
      data: data
    }
  };
}

Products.layout = Admin;

export default Products;
