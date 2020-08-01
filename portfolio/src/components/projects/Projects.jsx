import React,{useState,useContext} from 'react';
import Project from'./Project';
import Name from '../Name';
import UIC from '../../context/UIC';

const Projects = () => {
const {showSkills, toggleSkills} =useContext(UIC);
    return (
        <div className='projects-container'>
            <Name />
            <div className={showSkills ? "skills-toggle open" : "skills-toggle"}>
                <p onClick={toggleSkills}>Skills</p>
            </div>
            <h1 className="projects-title">Recent Projects</h1>
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default Projects;
