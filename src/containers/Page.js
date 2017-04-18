import React, { Component } from 'react';

import Masthead from '../containers/Masthead';

class Page extends Component {

    getPostData(item) {
        if(item.slug === this.props.params.postID) {
            return item;
        }
    }
    componentWillMount() {
        this.props.shouldFetchPage(this.props.location.pathname.slice(1), true);
    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            if(!this.props.pages[this.props.location.pathname.slice(1)]) {
                this.props.toggleLoader();
                this.props.shouldFetchPage(this.props.location.pathname.slice(1), true);
            } else {
                this.props.shouldFetchPage(this.props.location.pathname.slice(1), false);
            }

        } else {
            return false;
        }

    }
    render() {
        console.log(this.props);
        if(!this.props.loading) {
            return (
                <div>
                    <Masthead toggleNav={ this.props.toggleNav }  globalData={ this.props.globalData } navigation={ this.props.navigation } />
                    on about page - talk about football and rum and fitness
                </div>
            );
        } else {
            return null;

        }
    }
}
export default Page;