import React, {Component} from 'react';

import Loader from '../components/Loader';

import Navigation from '../components/navigation/Navigation';
import Footer from './Footer';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Main extends Component {
    state = {
        loader: true
    };
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
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.loading !== this.props.loading) {
            if(this.props.loading) {
                this.setState({
                    loader: !this.state.loader
                })
            } else {
                setTimeout( () => {
                    this.setState({
                        loader: !this.state.loader
                    })
                }, 1000);
            }

        }
    }
    render() {
        return (
            <div>
                <div className="browser-notice">
                    Your browser does not support grid.
                </div>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={50}
                    transitionLeaveTimeout={500}>
                    {
                        (this.state.loader) ?
                            <div>

                                    <Loader />

                            </div>
                            :
                            null
                    }
                </CSSTransitionGroup>
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
