import React from 'react';

import SocialIcons from './SocialIcons';

const ContactInfo = (props) => {
    if(props.contactInfo.social_media) {
        return(
            <div className={ `${ props.color } | global-data`}>
                <p>E: { props.contactInfo.contact_email }</p>
                <p>T: { props.contactInfo.contact_number }</p>
                <SocialIcons socialInfo={ props.contactInfo.social_media }  />
            </div>
        )
    } else {
        return (
            <span />
        )
    }
};
export default ContactInfo;