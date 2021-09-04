import React from 'react'
import About from './about/index'
import './body.css'
import Projects from './Projects/index'
import Skills from './skills/index'
import Work from './work/index'
import Contact from './contact/index'

function body() {
    return (
        <div className='body'>
            <section id="about">
                <About/>
            </section>
            <section id='project'>
                <Projects />
            </section>
            <section id='skills'>
                <Skills />
            </section>
            <section id='work'>
                <Work />
            </section>
            <section id='contact'>
                <Contact />
            </section>
        </div>
    )
}

export default body
