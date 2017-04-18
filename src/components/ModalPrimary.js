import React, { Component } from 'react';
import { Modal, ModalManager, Effect} from 'react-dynamic-modal';
import renderHTML from '../utils/renderHTML';

import PrevButton from './buttons/PrevButton';
import NextButton from './buttons/NextButton';

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: this.props.index
        }
    }
    previous(i) {
        if(i === 0) {
            history.pushState(null, null, `/projects/${this.props.projects[( this.props.projects.length - 1)].slug}`);
            this.setState({
                current: ( this.props.projects.length - 1)
            });
        } else {
            history.pushState(null, null, `/projects/${this.props.projects[(i - 1)].slug}`);
            this.setState({
                current: (i - 1)
            });
        }

    }
    next(i) {
        if(i >= ( this.props.projects.length - 1) ) {
            history.pushState(null, null, `/projects/${this.props.projects[0].slug}`);
            this.setState({
                current: 0
            });
        } else {
            history.pushState(null, null, `/projects/${this.props.projects[(i + 1)].slug}`);
            this.setState({
                current: (i + 1)
            });
        }
    }
    toggleClose() {
        document.querySelector('html').classList.remove('modal-open');
        ModalManager.close();
        history.pushState(null, null, `/`)
    }
    render() {
        const styles = {
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                perspective: 1300,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
            },
            content: {
                position: 'relative',
                width: '100%',
                margin: '0',
                border: '0',
                background: '#fff',
                overflow: 'auto',
                borderRadius: '0',
                outline: 'none',
                height: '100%',
                boxShadow: '0',
                transition: '0.3s all'
            }
        };
        const project = this.props.projects[this.state.current];
        const bg = {
            backgroundImage: `url(${project.better_featured_image.media_details.sizes['blog-overall'].source_url} )`,
            backgroundRepeat: 'no-repeat'
        };
        return (
            <Modal style={ styles } effect={ Effect.ScaleUp }>
                <PrevButton i={ this.state.current } handleClick={ this.previous.bind(this) } />
                <NextButton i={ this.state.current } handleClick={ this.next.bind(this) } />
                <button className="close-btn" onClick={ this.toggleClose.bind(this) }>X</button>
                <main className="project">
                    <header className={ `layout__secondary | flex-center | color-bg color-bg-${(this.state.current + 1)} | project__header` } style={ bg }>
                        <div className="constrained-to-80-percent | project__headline">
                            <h1 className="regular-font-weight secondary-color underlined">{ project.title.rendered }</h1>
                            <h5 className="constrained-to-1000 constrained--left | secondary-color">{ project.acf.project_headline } </h5>
                        </div>
                    </header>
                    <section className="contrast-bg | project__brief">
                        <div className="constrained-to-80-percent">
                            <h3 className="underlined">Project Brief</h3>
                            <div className="constrained-to-80-percent constrained--left" dangerouslySetInnerHTML={ renderHTML(project.acf.project_brief) } />
                        </div>
                    </section>
                    {
                        project.acf.project_content_sections.map( (article, i) => {
                            if (i % 2 === 0) {
                                return (
                                    <article key={ i } className="layout__secondary | flex-center contrast-bg--lighten | project__article">
                                        <figure className="desk-one-third | project__figure">
                                            <img src={ article.image.sizes['square-lg'] } alt={ article.image.title }/>
                                        </figure>
                                        <aside className="desk-two-thirds | project__aside">
                                            <div className="constrained-to-700" dangerouslySetInnerHTML={ renderHTML(article.content) } />
                                        </aside>
                                    </article>
                                )

                            } else {
                                return(
                                    <article key={ i } className="layout__secondary | flex-center contrast-bg | project__article">
                                        <aside className="desk-two-thirds | project__aside">
                                            <div className="constrained-to-700" dangerouslySetInnerHTML={ renderHTML(article.content) } />
                                        </aside>
                                        <figure className="desk-one-third | project__figure">
                                            <img src={ article.image.sizes['square-lg'] } alt={ article.image.title }/>
                                        </figure>
                                    </article>
                                )
                            }
                        })
                    }
                    <footer className="text-center | primary">
                        <a className="btn btn__primary" href={ project.acf.project_url } title={ project.title.rendered }>Launch Site</a>
                    </footer>

                </main>

            </Modal>
        )
    }
}

export default Modals;