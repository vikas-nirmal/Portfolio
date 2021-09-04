import React from 'react'
import Separator from '../../common/separator/separator';
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card';
import './project.css'

function Projects() {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-tittle'>Projects</label>
            <div>
                {data.map((project, pos)=>{
                    return <ProjectCard project={project} pos={pos}/>;
                })}
            </div>
        </div>
    )
}

export default Projects
