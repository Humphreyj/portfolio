import React from 'react';
import Project from'./Project';
import Name from '../Name';

const Projects = () => {
    return (
        <div className='projects-container'>
            <Name />
            <h1 className="projects-title">Recent Projects</h1>
            <Project />
            <Project />
            <Project />
        </div>
    );
}

export default Projects;
