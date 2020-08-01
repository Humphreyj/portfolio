import React,{useState,useEffect} from 'react';
import Skills from './Skills';

const NameAndSkills = () => {
    return (
        <div className='name-and-skills'>

            <h4 className="skills-title">Skills</h4>
        <Skills />  
        </div>
    );
}

export default NameAndSkills;
