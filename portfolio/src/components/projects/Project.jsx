import React from 'react';
import lander from '../../img/lander.png';

const Project = () => {
    return (
        <div className='project'>
				<img className='project-img' src={lander} alt='project 2'/>
				<div className="project-info">
                    <p className="project-title">Dynamic Home Page</p>
					<p className="tech-stack">HTML, CSS, JavaScript</p>
					<p className='project-desc'>
					The Front End for a 'Pirate Radio' station. I was tasked with the redesign of the site and implementation of additional features (WIP)
					</p>
					<div className="proj-buttons">
						<a href='https://dynamiclander.netlify.app' className='proj-link '>View Site</a>
						<a href='https://github.com/Humphreyj/pirate-radio/tree/master/outpost-radio' className='proj-link '>View Code</a>

					</div>{/*Project buttons*/}
				</div>
			</div>
    );
}

export default Project;
