import React from 'react';


function SocialIcons(props) {

    return(
        <div className="social-icons">
            <ul>
                {
                    props.socialInfo.map( (item, i) => {
                        return(
                            <li key={ i }>
                                <a href={ item.url } title={ item.platform } target="_blank" rel="noopener"><i className={ `fa ${item.icon}` }></i></a>
                            </li>
                        )
                    })
                }
            </ul>


        </div>
    )
}
export default SocialIcons;