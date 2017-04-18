import React, { Component } from 'react';
import { ModalManager } from 'react-dynamic-modal';
import Modals from '../components/ModalPrimary';
import ContactInfo from '../components/ContactInfo';
import Logo from '../components/Logo';

import {
    withGoogleMap,
    GoogleMap,
} from 'react-google-maps';

import Masthead from './Masthead';
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

class Projects extends Component {
    constructor(props) {
        super(props);
        this.renderHTML = this.renderHTML.bind(this);
        this.state = {
            key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
            loading: true,
            center: {lat: 52.0798155, lng: -0.7530945},
            zoom: 10,
            scroll: false
        };
    }
    openModal(project, index){
        document.querySelector('html').classList.add('modal-open');
        ModalManager.open(<Modals index={ index } project={ project } projects={ this.props.projects } />);
        history.pushState(null, null, `/projects/${project.slug}`);
    }
    componentWillMount() {
        this.props.shouldFetchProjects('projects', '?per_page=8', false, '&orderby=menu_order&order=asc');
    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    renderHTML(content) {
        return {__html: content};
    }
    render() {
        return (
            <main>
                <Masthead toggleNav={ this.props.toggleNav }  globalData={ this.props.globalData } navigation={ this.props.navigation } />
                <section className="layout__primary layout__primary--complex | projects tiles">
                    <TileHeader />
                    {
                        this.props.projects.map((item, i) => {
                            return (
                                <Tile key={ i } item={ item } i={ i } modal={this.openModal.bind(this) } />
                            )
                        })
                    }
                    <TileFooter />
                </section>
                <footer className="layout__secondary | contact">
                    <div className="desk-half | map">
                        <StyledMapExampleGoogleMap
                            containerElement={
                                <div className="full-height" />
                            }
                            mapElement={
                                <div className="full-height" />
                            }
                            //eslint-disable-next-line
                            center={new google.maps.LatLng(52.0798155, -0.7530945)}
                        />
                    </div>
                    <div className="layout__secondary | desk-half | padded-border__large">
                        <div className="layout__secondary | tab-half | flex-center | padded-border__large">
                            <Logo type="secondary" />
                        </div>
                        <div className="layout__secondary | tab-half | flex-center | padded-border__large">
                            <ContactInfo color="primary-color" contactInfo={ this.props.globalData } />
                        </div>
                        <div className="mob-full | self-aligned-flex-end text-center">
                            copyright
                        </div>
                    </div>
                </footer>

            </main>
        );

    }
}
export default Projects;