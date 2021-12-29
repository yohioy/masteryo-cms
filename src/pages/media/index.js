import React from 'react';

// components
import Admin from '../../components/Layout/Admin';
import MediaListGrid from '../../components/MediaListGrid';

function Media({ data, total }) {
  return (
    <div>
      Media Collection
      <MediaListGrid rowData={data} total={total} />
    </div>
  );
}

export async function getServerSideProps() {
  let total = 0;
  let data = [];

  try {
    const response = await fetch(`http://localhost:5024/api/media`);
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

Media.layout = Admin;

export default Media;
