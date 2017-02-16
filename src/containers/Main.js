import React, { Component } from 'react';
import Loader from '../components/Loader';

import Navigation from '../components/navigation/Navigation';
import Footer from './Footer';


class Main extends Component {
    componentWillMount() {
        this.props.fetchNavigation();
    }
    render() {
        return (
            <div className="wrapper">
                {
                    (this.props.loading) ?
                        <Loader />
                        :
                        null
                }
                <Navigation toggleNav={ this.props.toggleNav } navigation={ this.props.navigation } />
                <main className="wrapper">
                    { React.cloneElement(this.props.children, this.props, {key: this.props.location.pathname}) }
                </main>
                <Footer />
            </div>
        )
    }
}

export default Main;
