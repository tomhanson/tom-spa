import React from 'react';
import { Link } from 'react-router';

// import img from '../../assets/img/Untitled-1.jpg';

function Tile(props) {
    // let style;
    // if(props.item.better_featured_image) {
    //     style = {
    //         backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)), url('${ props.item.better_featured_image.media_details.sizes.thumbnail.source_url }')`
    //     }
    // } else {
    //     style= {
    //         backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1)), url(${ img })`
    //     };
    // }
    console.log(props.item);
    return (
        <article onClick={ props.modal.bind(this, props.item) } role="Project Item" key={ props.i } className={ `tiles__item tile-${ (props.i+1) }` } >
            <div>
                <h3 className="project__title">
                    { props.item.title.rendered }
                </h3>
                <p className="project__headline">
                    { props.item.acf.headline }
                </p>
                <div className="btn btn-tile">
                    View more
                </div>

            </div>
        </article>
    )
}

export default Tile;