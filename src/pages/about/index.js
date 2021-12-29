import React from "react";

// layout for this page
import Copyright from "../../components/Copyright";


export async function getStaticProps(context) {
    console.log('context', context);

    return {
        props: {}, // will be passed to the page component as props
    }
}


function Dashboard() {

    return (
        <div>
            <h1>About Page</h1>
            <Copyright />
        </div>
    );
}

export default Dashboard;
