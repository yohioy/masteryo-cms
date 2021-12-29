import React, {Component, useEffect} from "react";
import Router from "next/router";

function Index () {

    useEffect(() => {
        Router.push("/dashboard");
    });

    return <div />;

}

export default Index;
