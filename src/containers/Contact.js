import React, { Component } from 'react';

import Masthead from '../components/masthead/Masthead';

class Contact extends Component {
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
        return (
            <div>
                <Masthead toggleNav={ this.props.toggleNav }  globalData={ this.props.globalData } navigation={ this.props.navigation } />
                hello world - contact
            </div>
        );
    }
}
export default Contact;