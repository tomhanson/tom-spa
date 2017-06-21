import React from 'react';
import { Link } from 'react-router';

const MastheadTitle = (props) => {
    return(
        <div className="masthead__title">
            <h1>Tom Hanson</h1>
            <hr />
            <div className="layout__secondary align-center | masthead__block">
                <h5>Front-end / JavaScript / React</h5>
                <Link to="/about" className="btn btn--secondary">
                    Learn more
                </Link>
            </div>

        </div>
    )
};

export default MastheadTitle;