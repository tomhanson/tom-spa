import React, { Component } from 'react';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import Modals from '../components/Modals';

import Masthead from './Masthead';
import Tile from '../components/tiles/Tile';
import TileHeader from '../components/tiles/TileHeader';
import TileFooter from '../components/tiles/TileFooter';

class Home extends Component {
    openModal(project){
        ModalManager.open(<Modals project={ project } />);
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
                    <section className="projects tiles">
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
                </div>
            );
        } else {
            return null;

        }

    }
}
export default Home;