import React, {Component} from 'react';

import Loader from '../components/Loader';

import Navigation from '../components/navigation/Navigation';
import Footer from './Footer';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Main extends Component {
    componentWillMount() {
        this.props.fetchNavigation();
        this.props.fetchGlobalData();
    }
    navScrolled() {
        const scroll = document.querySelector('.scrolled__overlay');
        if (window.scrollY < 1) {
            scroll.classList.remove('scrolled');
        } else {
            scroll.classList.add('scrolled');
        }
    }
    scrollEventWrap() {
        this.navScrolled();
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventWrap.bind(this));
    }
    render() {
        return (
            <div>
                <div className="browser-notice">
                    Your browser does not support grid.
                </div>
                {
                    (this.props.loading) ?
                        <div>
                            <CSSTransitionGroup
                                transitionName="example"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={300}>
                                <Loader />
                            </CSSTransitionGroup>
                        </div>
                        :
                        null
                }
                <Navigation toggleNav={ this.props.toggleNav } navigation={ this.props.navigation }/>
                <div className="wrapper">
                    { React.cloneElement(this.props.children, this.props, {key: this.props.location.pathname}) }
                    <Footer globalData={ this.props.globalData } />
                </div>
            </div>
        )
    }
}

export default Main;
