import React,{useState,useContext} from 'react';
import Project from'./Project';
import Name from '../Name';
import UIC from '../../context/UIC';
import lander from '../../img/lander.png';
import localMarket from '../../img/localmarket.png';
import nasa from '../../img/nasa.png';

const Projects = () => {
const {showSkills, toggleSkills} =useContext(UIC);
    return (
        <div className='projects-container'>
            <Name />
            <div className={showSkills ? "skills-toggle open" : "skills-toggle"}>
                <p onClick={toggleSkills}>Skills</p>
            </div>
            <h1 className="projects-title">Recent Projects</h1>
            <Project
            img={lander}
            name="Dynamic Home Page"
            stack="HTML, CSS, JavaScript"
            description="A homepage that retrieves the user's locations and returns the local weather. Also diplays the current price of Bitcoin and Ethereum using the CoinMarketCap API. User can set their name and current goal for the day."
            site='https://dynamiclander.netlify.app/'
            git='https://github.com/Humphreyj/dynamic-lander'
             />
            <Project
            img={localMarket}
            name="Local Market"
            stack="JavaScript,React, Sass"
            description="The Front End for an online grocery store. Users can navigate through items and place orders. Administrator can add and edit items in their store."
            site='https://localmarket.netlify.app/'
            git='https://github.com/Humphreyj/to-go'
             />
            <Project
            img={nasa}
            name="Nasa Photo of the Day"
            stack="JavaScript,React, Styled Components"
            description="A web application that consumes NASA's Photo of the Day API,and returns the weather data on Mars if it is available."
            site='https://spaceyall.netlify.app/'
            git='https://github.com/Humphreyj/nasa-photo-of-the-day/tree/josh-humphrey'
            
             />
        </div>
    );
}

export default Projects;
