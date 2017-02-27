import React, { Component } from 'react';

import img from '../assets/img/cover.jpg';

import Header from './Header';

class Page extends Component {
    constructor(props) {
        super(props);
    }
    getPostData(item) {
        if(item.slug === this.props.params.postID) {
            return item;
        }
    }
    componentWillMount() {
        this.props.shouldFetchCurrentPost(this.props.params.postID);
    }
    componentDidMount(){
        this.props.shouldFetchData(1);
    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    render() {
        console.log(this.props);
        if(!this.props.loading) {
            return (
                <div>
                    test
                </div>
            );
        } else {
            return null;

        }
    }
}
export default Page;