import React from 'react'
import './project-card.css'
function ProjectCard({project}) {
    return (
        <div className='project-card'>
            <div className="project-info">
                <label className='project-tittle'>{project.tittle}</label>
                <div className="project-links">
                    {project.demo&& (<a className='project-link' href={project.demo}>
                        <div className='link-button'>
                        <i className="fi-rr-globe"></i>Website
                        </div>
                        </a>)}
                        {project.github&& (<a className='project-link' href={project.github}>
                        <div className='link-button'>
                        <i className="devicon-github-original colored"></i>Github
                        </div>
                        </a>)}
                </div>
            </div>
            <img src={project.image} alt="project" className='project-photo' />
        </div>
    )
}

export default ProjectCard
