import React from "react";

// layout for this page
import Admin from "../../components/Layout/Admin";
import PageListGrid from "../../components/PageListGrid";

function Pages({ data, total }) {

    return (
        <div>
            Pages page
            <PageListGrid rowData={data} total={total} />
        </div>
    );
}

export async function getServerSideProps() {

    const response = await fetch(`http://localhost:5023/api/pages`);
    const { total, data } = await response.json();

    return {
        props: {
            total: total,
            data: data
        }
    }
}

Pages.layout = Admin;

export default Pages;
