import React, { Component } from 'react';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import Modals from '../components/Modals';

import Masthead from './Masthead';
import Tile from '../components/tiles/Tile';
import TileHeader from '../components/tiles/TileHeader';
import TileFooter from '../components/tiles/TileFooter';

class Home extends Component {
    openModal(project, index){
        console.log(this);
        ModalManager.open(<Modals index={ index } project={ project } />);
        history.pushState(null, null, `/projects/${project.slug}`);
    }
    componentWillMount() {
        this.props.shouldFetchPosts();
    }
    componentDidMount() {

    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }

    render() {
        if(!this.props.loading) {
            return (

                <div>
                    <Masthead toggleNav={ this.props.toggleNav } navigation={ this.props.navigation } />
                    <section className="layout__item layout__item--complex | projects tiles">
                        <TileHeader />
                        {
                            this.props.posts.map((item, i) => {
                                return (
                                    <Tile key={ i } item={ item } i={ i } modal={this.openModal.bind(this) } />
                                )
                            })
                        }
                        <TileFooter />
                    </section>
                    <section className="layout__item layout__item--basic reverse | about">
                        <div className="layout__desktop-third primary-bg">
                            <h2 className="secondary-color">About me</h2>
                        </div>
                        <div className="flex center | layout__desktop-two-thirds">
                            some random stuff about me

                        </div>
                        <div className="hobbies">

                        </div>
                    </section>
                    <section className="blog">
                        blog here
                    </section>
                    <section className="contact">
                        contact info
                    </section>
                </div>
            );
        } else {
            return null;

        }

    }
}
export default Home;