import React from 'react';

import IconArrow from '../icons/IconArrow';

import deafultImg from '../../assets/img/Untitled-1.jpg';

const Tile = function(props) {
    let style;
    if(props.item.better_featured_image) {
        let img = props.item.better_featured_image.media_details.sizes['blog-overall'] || props.item.better_featured_image.media_details.sizes.large || props.item.better_featured_image;
        // let img = props.item.better_featured_image.media_details.sizes['blog-overall']['source_url'];
        style = {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${ img['source_url'] }')`
        }
    } else {
        style= {
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${ deafultImg })`
        };
    }
    return (
        <article className={ `project-tile | tiles__item tile-${ (props.i+1) } color-bg-${ (props.i+1) }` } style={ style }  onClick={ props.modal.bind(this, props.item, props.i) }>
            <header className="project-tile__info">
                <h3 className="project-tile__title">
                    { props.item.title.rendered }
                </h3>
                <p className="project-tile__headline">
                    { props.item.acf.project_headline }
                </p>
                <p className="project-tile__button">
                    <span className="project-tile__icon">
                        <IconArrow />
                    </span>
                    View more
                </p>
            </header>
        </article>
    )
};

export default Tile;