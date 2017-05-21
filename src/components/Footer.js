import React, { Component } from 'react';

import ContactInfo from './ContactInfo';
import Logo from './Logo';

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

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
            loading: true,
            center: {lat: 52.0798155, lng: -0.7530945},
            zoom: 10,
            scroll: false,
            date: new Date().getFullYear()
        };
    }
    render() {
        return(
            <footer className="layout__secondary | contact">
                <div className="desk-half | map">
                    <StyledMapExampleGoogleMap
                        containerElement={ <div className="full-height" /> }
                        mapElement={ <div className="full-height" /> }
                        //eslint-disable-next-line
                        center={new google.maps.LatLng(52.0798155, -0.7530945)}
                    />
                </div>
                <div className="layout__secondary | desk-half desk-half | padded-border__large">
                    <div className="layout__secondary | tab-half | flex-center | padded-border__large">
                        <Logo type="secondary" />
                    </div>
                    <div className="layout__secondary | tab-half desk-half | flex-center | padded-border__large">
                        <ContactInfo color="primary-color" contactInfo={ this.props.globalData } />
                    </div>
                    <div className="mob-full | self-aligned-flex-end text-center">
                        <p>Tom Hanson { this.state.date } <span className="copy">&copy;</span></p>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;