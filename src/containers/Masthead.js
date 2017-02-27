import React, {Component} from 'react';

class Header extends Component {
    toggleNav() {
        this.props.toggleNav();
    }
    render() {
        // const style= {     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0,
        // 0.8), rgba(0, 0, 0, 0.8)), url('${ this.props.featuredImage }')` };
        return (
            <header className="layout__item layout__item--basic | primary-bg | masthead">
                <div className="layout__desktop-two-thirds | primary-bg | header__banner">
                    masthead
                </div>
                <div className="layout__desktop-third | header__sidebar">
                    sidebar
                </div>
            </header>
        )
    }
}

export default Header;