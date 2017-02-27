import React, {Component} from 'react';
import {Link} from 'react-router';

import Hamburger from './Hamburger';

class Navigation extends Component {
    toggleNav() {
        this.props.toggleNav();
    }
    render() {
        return (
            // <!-- Navigation -->
            <nav role="navigation" className={ (this.props.navigation.open) ? "sitewide nav-open" : "sitewide" } onClick={ this.toggleNav.bind(this) }>
                <Hamburger toggleNav={ this.props.toggleNav.bind(this) } />
                <ul className="">
                    {
                        (this.props.navigation.items.length) ?
                            this.props.navigation.items.map((item, i) => {

                                return (
                                    <li key={ i }>
                                        {
                                            (item.name === 'Home') ?
                                                <Link to="/">{ item.name }</Link>
                                                :
                                                <Link to={ `/${item.slug}` }>{ item.name }</Link>
                                        }
                                    </li>
                                )

                            })
                            :
                            null
                    }

                </ul>
            </nav>

        )
    }
}
export default Navigation