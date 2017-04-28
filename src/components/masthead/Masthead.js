import React from 'react';

import Logo from '../Logo';
import MastheadTitle from './MastheadTitle';

function Masthead(props) {
    return (
        <header className="layout__primary | masthead">
            <div className="layout__secondary | contrast-bg | header__banner">
                <div style={{ flex: '1 1 100%' }}>
                    <Logo type="primary" />
                </div>
                <MastheadTitle />
            </div>
        </header>
    )
}
export default Masthead;