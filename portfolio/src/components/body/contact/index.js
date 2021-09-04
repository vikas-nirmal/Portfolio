import React from 'react'
import Separator from '../../common/separator/separator';
import SocialContact from '../../common/social-contact'
import './contact.css'

function Contact() {
    return (
        <div className='contact'>
            <Separator />
            <label className='section-tittle'></label>
            <div className="contact-container">
                    <div className="contact-left">
                        <p>want to get in touch? Contact me on  any of the paltform </p>
                        <SocialContact />
                    </div>
                    <div className="download">
                        <a download href={require('../../../assets/resume.pdf')}>
                        <i className="fi-rr-cloud-download"></i>
                            Download Resume</a>
                    </div>
            </div>
        </div>
    )
}

export default Contact
