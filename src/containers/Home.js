import React, { Component } from 'react';
import { ModalManager } from 'react-dynamic-modal';
import renderHTML from '../utils/renderHTML';
import Modals from '../components/ModalPrimary';
import ContactInfo from '../components/ContactInfo';
import Logo from '../components/Logo';

import Footer from '../components/Footer';

import {
    withGoogleMap,
    GoogleMap,
} from 'react-google-maps';

import Masthead from '../components/masthead/Masthead';
import Tile from '../components/tiles/Tile';
import TileHeader from '../components/tiles/TileHeader';
import TileFooter from '../components/tiles/TileFooter';


const StyledMapExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.center}
        defaultOptions={{ scrollwheel: false, styles: {} }}
    >
    </GoogleMap>
));

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    openModal(project, index){
        document.querySelector('html').classList.add('modal-open');
        ModalManager.open(<Modals index={ index } project={ project } projects={ this.props.projects } />);
        history.pushState(null, null, `/projects/${project.slug}`);
    }
    componentWillMount() {
        this.props.shouldFetchProjects('projects', '?per_page=8', false, '&orderby=menu_order&order=asc');
        this.props.shouldFetchPage('about');
    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    render() {
        return (
            <main>
                <Masthead toggleNav={ this.props.toggleNav }  globalData={ this.props.globalData } navigation={ this.props.navigation } />
                <section className="layout__primary layout__primary--complex | projects tiles">
                    <TileHeader />
                    {
                        this.props.projects.map((item, i) => {
                            if(i < 9) return <Tile key={ i } item={ item } i={ i } modal={this.openModal.bind(this) } />;
                        })
                    }
                    <TileFooter />
                </section>
                <section className="layout__primary layout__primary--basic | about">
                    <div className="desk-one-third | dynamic-bg">
                        <h2 className="secondary-color">About me</h2>
                    </div>
                    {
                        (this.props.pages.about) ?
                            <div className="desk-two-thirds | layout__secondary">
                                <div className="layout__secondary | desk-half | flex-center manual-order-high--tablet | padded-border__large text-center ">
                                    <article className="constrained-to-500" dangerouslySetInnerHTML={ renderHTML(this.props.pages.about.acf.about_extra_content) }/>
                                </div>
                                <div className="layout__secondary | desk-half | flex-center full-width-img | padded-border__large  text-center">
                                    <picture>
                                        <source media="(max-width: 600px)" srcSet={ `${ this.props.pages.about.better_featured_image.media_details.sizes.medium_large.source_url }, ${ this.props.pages.about.better_featured_image.media_details.sizes.large.source_url } 2x` }/>
                                        <source srcSet={ `${this.props.pages.about.better_featured_image.media_details.sizes.large.source_url }, ${this.props.pages.about.better_featured_image.source_url } 2x` }/>
                                            <img src={ this.props.pages.about.better_featured_image.source_url } alt="Me" />
                                    </picture>
                                </div>
                             </div>
                            :
                            <p>Loading</p>
                    }
                </section>
            </main>
        );

    }
}
export default Home;