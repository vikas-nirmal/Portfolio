import React from 'react'
import Separator from '../../common/separator/separator';
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
import './skills.css'

function Skills() {
    const data = SkillsData;
    return (
        <div className='skill'>
            <Separator/>
            <label className='section-tittle'>
                Skills
            </label>
            <div className='skills-container'>
                {data.map((item)=>{
                    return(
                        <div className='skills-section'>
                                <label className='skills-section-tittle'> 
                                    {item.type}
                                </label>
                            <div className='skills-list'>
                                {item.list.map((skill)=>{
                                    return(
                                        <SkillCard skill={skill}/>
                                    )
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills
