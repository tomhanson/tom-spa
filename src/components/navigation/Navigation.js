import React, {Component} from 'react';
import { Link } from 'react-router';
import Logo from '../Logo';

import Hamburger from './Hamburger';

class Navigation extends Component {
    toggleNav() {
        this.props.toggleNav();
    }
    render() {
        return (
            <span>
                <Logo type="primary" />
                <nav role="navigation" className={ (this.props.navigation.open) ? "sitewide nav-open" : "sitewide" } onClick={ this.toggleNav.bind(this) }>

                    <div className={ (this.props.navigation.items.length) ? "loaded | layout__secondary | justify-flex-end | scrolled__overlay" : "loading | layout__secondary | justify-flex-end | scrolled__overlay" }>
                        <Hamburger toggleNav={ this.props.toggleNav.bind(this) } />
                    </div>

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
                                                    (item.name === 'Blog') ?
                                                        <a href="http://www.learningjs.co.uk" target="_blank" title={ item.name }>{ item.name }</a>
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
            </span>


        )
    }
}
export default Navigation