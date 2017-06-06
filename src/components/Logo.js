import React from 'react';
import { Link } from 'react-router';

const Logo = (props) => {
    return (
        <Link to="/">
            <pre className={ `logo logo__${ props.type }` }>
                &lt;Developer&gt;{'\n'}
                &nbsp;&nbsp;Tom Hanson{'\n'}
                &lt;/Developer&gt;
            </pre>
        </Link>
    )
};

export default Logo