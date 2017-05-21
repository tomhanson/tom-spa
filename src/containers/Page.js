import React, { Component } from 'react';

import renderHTML from '../utils/renderHTML';

import Masthead from '../components/masthead/Masthead';
import ContactInfo from '../components/ContactInfo';
import Logo from '../components/Logo';

import {
    withGoogleMap,
    GoogleMap,
} from 'react-google-maps';

const StyledMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.center}
        defaultOptions={{ scrollwheel: false, styles: {} }}
    >
    </GoogleMap>
));

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
        if(!this.props.loading) {
            console.log('t',this.props.pages.about);
            return (
                <div>
                    <Masthead toggleNav={ this.props.toggleNav }  globalData={ this.props.globalData } navigation={ this.props.navigation } />
                    <section className="layout__secondary | page__about">
                        <div className="desk-half | ui__space" dangerouslySetInnerHTML={ renderHTML(this.props.pages.about.acf.about_extra_content)} />
                        <div className="desk-half | ui__space">
                            <picture>
                                <source media="(max-width: 600px)" srcSet={ `${ this.props.pages.about.better_featured_image.media_details.sizes.medium_large.source_url }, ${ this.props.pages.about.better_featured_image.media_details.sizes.large.source_url } 2x` }/>
                                <source srcSet={ `${this.props.pages.about.better_featured_image.media_details.sizes.large.source_url }, ${this.props.pages.about.better_featured_image.source_url } 2x` }/>
                                <img src={ this.props.pages.about.better_featured_image.source_url } alt="Me" />
                            </picture>
                        </div>
                        <div className="ui__space" dangerouslySetInnerHTML={ renderHTML(this.props.pages.about.content.rendered)} />
                        <div className="layout__secondary padded-border__large | mob-full | icon-list">
                            {
                                this.props.pages.about.acf.about_content_extras.map( (item, i) => {
                                    return(
                                        <div key={ i } className="mob-full tab-half desk-quarter text-center | icon-list__content">
                                            <i className={ `fa ${item.icon} | icon-list__icon` } aria-hidden="true">&nbsp;</i>
                                            <p className="icon-list__text">{ item.text }</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </section>
                </div>
            );
        } else {
            return null;

        }
    }
}
export default Page;