import React from 'react';

import ContactInfo from '../components/ContactInfo';
import Logo from '../components/Logo';

function Masthead(props) {
    return (
        <header className="layout__primary layout__primary--basic | masthead">
            <div className="desk-two-thirds | layout__secondary | contrast-bg | header__banner">
                <Logo type="primary" />
                <h1 style={{ flex: '1 1 100%' }}>Tom Hanson, Front end Developer
                </h1>
            </div>
            <div className="desk-one-third | contrast-bg--lighten | header__sidebar">
                <ContactInfo color="secondary-color" contactInfo={ props.globalData } />
            </div>
        </header>
    )
}

export default Masthead;