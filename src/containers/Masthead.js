import React, { Component } from 'react';

class Header extends Component {
    toggleNav() {
        this.props.toggleNav();
    }
    render() {
        // const style= {
        //     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${ this.props.featuredImage }')`
        // };
        return (
            <header className="primary | grid-container">
                <div className="header__banner">
                    click for nav
                </div>
                <div className="header__sidebar">
                    sidebar
                </div>
            </header>
        )
    }
}

export default Header;