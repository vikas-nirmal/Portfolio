import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className='about'>
            <div className="about-top">
                <div className='about-info'>
                    Hello There 👋 , I am 
                    <br/> <span className='info-name'>Vikas Nirmal</span>, 
                    <br/>I Love Web-Development. 
                </div>
                <div className='about-photo'>
                    <img src={require('../../../assets/coding.png').default} className='about-profile' alt='profile'/>
                </div>
            </div>
            <div className="about-bottom">
                <SocialContact />
            </div>
        </div>
    )
}

export default About
