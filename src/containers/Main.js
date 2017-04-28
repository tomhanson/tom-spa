import React, {Component} from 'react';

import Loader from '../components/Loader';

import Navigation from '../components/navigation/Navigation';
import Footer from './Footer';


class Main extends Component {
    componentWillMount() {
        this.props.fetchNavigation();
        this.props.fetchGlobalData();
    }
    navScrolled() {
        const nav = document.querySelector('.hamburger');
        if (window.scrollY < 1) {
            nav.classList.remove('scrolled');
        } else {
            nav.classList.add('scrolled');
        }
    }

    updateBG(...colours) {


        //at 0 scroll its this:
        // rgb(235, 178, 64);

        //at innerheight scroll its this:
        // rgb(236, 141, 129);

        // rgb(135, 197, 164);

        const BG = document.querySelectorAll('.dynamic-bg');
        const currentScroll = window.scrollY;

        const fullHeight = document.querySelector('html').offsetHeight;

        const colTwo = [235, 178, 64];
        const colOne = [236, 141, 129];
        const colThree = [ 135, 197, 164];

        //get length of the arguments passed in.
        const scrollDistance = ( (fullHeight / 3) / 100) * 75;

        if(currentScroll < scrollDistance) {
            //get the number difference between the rgb values of the two colours
            const differenceBetweenR = (colOne[0] >= colTwo[0]) ? colOne[0] - colTwo[0] : colTwo[0] - colOne[0];
            const differenceBetweenG = (colOne[1] >= colTwo[1]) ? colOne[1] - colTwo[1] : colTwo[1] - colOne[1];
            const differenceBetweenB = (colOne[2] >= colTwo[2]) ? colOne[2] - colTwo[2] : colTwo[2] - colOne[2];
            //figure out how many pixels scroll for every number change
            const distanceOneDifference = Math.floor(scrollDistance / differenceBetweenR);
            const distanceTwoDifference = Math.floor(scrollDistance / differenceBetweenG);
            const distanceThreeDifference = Math.floor(scrollDistance / differenceBetweenB);
            //final value worked out by the original number + the total scroll position / how many pixels per colour change(math .ceil so always a full number)
            const currentValueR = (colOne[0] - Math.floor(currentScroll / distanceOneDifference) );
            const currentValueG = (colOne[1] + Math.floor(currentScroll / distanceTwoDifference) );
            const currentValueB = (colOne[2] - Math.floor(currentScroll / distanceThreeDifference) );

            BG.forEach(item => {
                item.style.backgroundColor = `rgb(${currentValueR}, ${currentValueG}, ${currentValueB})`;
            })
        } else if(currentScroll < (scrollDistance *2) ) {
            //get the number difference between the rgb values of the two colours
            const differenceBetweenR = (colTwo[0] >= colThree[0]) ? colTwo[0] - colThree[0] : colThree[0] - colTwo[0];
            const differenceBetweenG = (colTwo[1] >= colThree[1]) ? colTwo[1] - colThree[1] : colThree[1] - colTwo[1];
            const differenceBetweenB = (colTwo[2] >= colThree[2]) ? colTwo[2] - colThree[2] : colThree[2] - colTwo[2];
            //figure out how many pixels scroll for every number change
            const distanceOneDifference = Math.floor(scrollDistance / differenceBetweenR);
            const distanceTwoDifference = Math.floor(scrollDistance / differenceBetweenG);
            const distanceThreeDifference = Math.floor(scrollDistance / differenceBetweenB);
            //final value worked out by the original number + the total scroll position / how many pixels per colour change(math .ceil so always a full number)
            const currentValueR = (colTwo[0] - Math.floor( (currentScroll - scrollDistance) / distanceOneDifference) );
            const currentValueG = (colTwo[1] + Math.floor( (currentScroll - scrollDistance) / distanceTwoDifference) );
            const currentValueB = (colTwo[2] + Math.floor( (currentScroll - scrollDistance) / distanceThreeDifference) );

            BG.forEach(item => {
                item.style.backgroundColor = `rgb(${currentValueR}, ${currentValueG}, ${currentValueB})`;
            })
        }
    }

    scrollEventWrap() {
        this.navScrolled();
        this.updateBG();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventWrap.bind(this));
    }
    render() {
        return (
            <div className="wrapper">
                <div className="browser-notice">
                    Your browser does not support grid.
                </div>
                {
                    (this.props.loading) ?
                        <Loader />
                        :
                        null
                }
                <Navigation toggleNav={ this.props.toggleNav } navigation={ this.props.navigation }/>
                <div className="wrapper">
                    { React.cloneElement(this.props.children, this.props, {key: this.props.location.pathname}) }
                </div>
                <Footer />
            </div>
        )
    }
}

export default Main;
