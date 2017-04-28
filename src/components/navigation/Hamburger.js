import React from 'react';

const Hamburger = function (props) {
    return (
        <div role="button" className={ (props.navLoaded) ? "loaded | hamburger" : "loading | hamburger" }>
            {/*<span>&nbsp;</span>*/}
            {/*<span>&nbsp;</span>*/}
            {/*<span>&nbsp;</span>*/}
            {/*<span>&nbsp;</span>*/}
            <svg version="1.1" id="Layer_1" x="0px" y="0px"
                 viewBox="0 0 743.5 440.4" style={{enableBackground: 'new 0 0 743.5 440.4'}}>
                <path className="st0" d="M372.3,220.2"/>
                <path className="st1" d="M707,239.9"/>
                <line className="st2 cross" x1="295.2" y1="144.3" x2="436.7" y2="312.2"/>
                <path className="st3" d="M842.2,179.5"/>
                <path className="st2 u" d="M616.2,159.2v85.4c0,30.5,24.8,50.6,55.3,50.6s55.3-20.1,55.3-50.6v-97.7c0-71.4-57.9-129.2-129.2-129.2
            c-40.5,0-76.7,18.7-100.4,47.9L365.5,227.7"/>
                <path className="st2 m" d="M150.2,295.2v-136L83.9,240l-66.7-80.8v132.9c0,4.5,0.3,8.9,0.7,13.3c6.6,65.2,61.6,116,128.5,116
            c40.3,0,76.3-18.4,100-47.3l119.1-146.4"/>
                <g className="e">
                    <line className="st4" x1="345.1" y1="159.2" x2="235.4" y2="159.2"/>
                    <polyline className="st4"
                              points="334.6,227.2 235.4,227.2 235.4,159.2 235.4,227.2 235.4,295.2 345.1,295.2 	"/>
                </g>
                <path className="st5" d="M529.7,143.2"/>
                <path className="st5" d="M529.7,311.2"/>
                <g className="n">
                    <polyline className="st6" points="529.7,159.2 529.7,295.2 415.7,159.2 415.7,295.2 	"/>
                </g>
            </svg>
        </div>


    )
};

export default Hamburger;