import React from 'react';
import IconArrow from '../icons/IconArrow';

const prevButton = (props) => {
    return (
        <div className="btn-direction btn__prev" onClick={ props.handleClick.bind(this, props.i) }>
            <IconArrow />
        </div>
    )
};

export default prevButton
