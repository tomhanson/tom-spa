import React, { Component } from 'react';
import { ModalManager } from 'react-dynamic-modal';
import renderHTML from '../utils/renderHTML';
import Modals from '../components/ModalPrimary';

import Masthead from '../components/masthead/Masthead';
import Tile from '../components/tiles/Tile';
import TileHeader from '../components/tiles/TileHeader';
import TileFooter from '../components/tiles/TileFooter';

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
    updateBG() {


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
        this.updateBG();
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollEventWrap.bind(this));
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
                            return null;
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