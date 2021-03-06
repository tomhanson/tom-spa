import React, { Component } from 'react';
import { ModalManager } from 'react-dynamic-modal';
import Modals from '../components/ModalPrimary';

import Masthead from '../components/masthead/Masthead';
import Tile from '../components/tiles/Tile';
import TileHeader from '../components/tiles/TileHeader';
import TileFooter from '../components/tiles/TileFooter';


class Projects extends Component {
    openModal(project, index){
        document.querySelector('html').classList.add('modal-open');
        ModalManager.open(<Modals index={ index } project={ project } projects={ this.props.projects } />);
        window.history.pushState(null, null, `/projects/${project.slug}`);
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
            </main>
        );

    }
}
export default Projects;