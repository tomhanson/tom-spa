import React from 'react';

const Loader = (props) => {
    return(
        <div className="loader">
            <div className="loading-circles">
                <div className="circle">&nbsp;</div>
                <div className="circle">&nbsp;</div>
                <div className="circle">&nbsp;</div>
            </div>
        </div>
    )
};
export default Loader