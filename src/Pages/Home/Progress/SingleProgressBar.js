import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import './Progress.css'


const SingleProgressBar = ({ completed, labelTitle }) => {

    const labelName = completed + '%';
    return (
        <>
            <ProgressBar
                completed={completed}
                bgColor="#ff2e57"
                height="6px"
                baseBgColor="#fff"
                labelColor="#080337"
                margin="30px"
                labelClassName="label"
                labelSize=""
                animateOnRender
                customLabel={labelName}
            />
            <ProgressBar
                completed={completed}
                bgColor="#ff2e57"
                height="0px"
                baseBgColor="#fff"
                labelColor="#080337"
                labelAlignment="left"
                labelClassName="content_label"
                animateOnRender
                customLabel={labelTitle}
            />
        </>
    );
};

export default SingleProgressBar;