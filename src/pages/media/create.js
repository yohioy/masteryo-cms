import React,{ useRef } from "react";

// layout for this page
import Admin from "../../components/Layout/Admin";

// components
import FileUpload from '../../components/FileUpload';

function MediaAdd() {

    return (
        <div>
            <FileUpload fileType="image" />
        </div>
    );
}


MediaAdd.layout = Admin;

export default MediaAdd;
