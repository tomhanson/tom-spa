import React from 'react';


import MastheadTitle from './MastheadTitle';

function Masthead(props) {
    return (
        <header className="layout__primary | masthead">
            <div className="layout__secondary  | align-flex-end contrast-bg | header__banner">
                <MastheadTitle />
            </div>
        </header>
    )
}
export default Masthead;