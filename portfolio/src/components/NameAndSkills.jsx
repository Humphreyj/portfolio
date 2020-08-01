import React,{useState,useContext} from 'react';
import Skills from './Skills';
import UIC from '../context/UIC';

const NameAndSkills = () => {
    const {showSkills} = useContext(UIC);
    return (
        <div className={showSkills ? 'name-and-skills-open' : 'name-and-skills'}>
            <h4 className="skills-title">Skills</h4>
        <Skills />  
        </div>
    );
}

export default NameAndSkills;
