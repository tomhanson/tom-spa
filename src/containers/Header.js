import React, { Component } from 'react';

class Header extends Component {
    toggleNav() {
        this.props.toggleNav();
    }
    render() {
        const style= {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('${ this.props.featuredImage }')`
        };
        return (
            <header className="individual" style={style}>
                <h1 className="secondary-color">{ this.props.title }</h1>
                <h3 className="secondary-color">{ this.props.headline }</h3>
            </header>
        )
    }
}

export default Header;