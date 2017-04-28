import React, { Component } from 'react';

import img from '../assets/img/cover.jpg';

import renderHTML from '../utils/renderHTML';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {}
        }
    }
    getPostData(item) {
        if(item.slug === this.props.params.postID) {
            return item;
        }
    }
    randomColour(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
    componentWillMount() {
        this.props.shouldFetchCurrentProject(this.props.params.postID);
    }
    componentDidMount() {
        this.setState( (next, props) => {

        })
    }
    componentWillUnmount() {
        this.props.toggleLoader();
    }
    render() {
        const project = this.props.projects.find( (project) => {
            return project.slug === this.props.params.postID;
        } );

        let bg;
        if(project) {
            bg = {
                backgroundImage: `url(${project.better_featured_image.media_details.sizes['blog-overall'].source_url} )`,
                backgroundRepeat: 'no-repeat'
            };
        }

        return (

            (project) ?
                <main className="project">
                    <header className={ `layout__secondary | flex-center | color-bg color-bg-${ this.randomColour(1, 8) } | project__header` } style={ bg }>
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
                :
                null
        );

    }
}
export default Projects;