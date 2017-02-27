import React, { Component } from 'react';

import img from '../assets/img/cover.jpg';

import Header from './Header';

class Projects extends Component {
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

    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    render() {
        if(!this.props.loading) {
            return (
                <section>
                    {
                        this.props.posts.filter(this.getPostData.bind(this)).map( (item, i) => {
                            let featImg;
                            if (item.better_featured_image.media_details.sizes.large) {
                                featImg = item.better_featured_image.media_details.sizes.large.source_url;
                            } else {
                                featImg = img;
                            }
                            return (
                                <section key={ i }>
                                    <Header toggleNav={ this.props.toggleNav }
                                            navigation={ this.props.navigation }
                                            featuredImage={ featImg }
                                            title={ item.title.rendered }
                                            headline={ item.acf.headline } />
                                    <article dangerouslySetInnerHTML={{__html: item.content.rendered }} />
                                </section>
                            )
                        })
                    }
                </section>
            );
        } else {
            return null;

        }
    }
}
export default Projects;