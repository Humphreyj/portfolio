import React from 'react';

import reactImg from '../img/react.png'
import JS from '../img/js.png';
import HTML from '../img/hmtl.png';
import CSS from '../img/css.png';
import node from '../img/node.jpg';
import vs from '../img/vs.png'; 
import sass from '../img/sass.png';
import less from '../img/less.png';
import git from '../img/git.png';

const Skills = () => {
    return (
        <div className="skills">
        
        <div className="skill html">
            <img src={HTML} alt="react logo"/>
            <p className="skill-title">HTML 5</p>
        </div>

        <div className="skill css">
            <img src={CSS} alt="react logo"/>
            <p className="skill-title">CSS</p>
        </div>

        <div className="skill javascript">
            <img src={JS} alt="react logo"/>
            <p className="skill-title">JavaScript</p>
        </div>

        <div className="skill react">
            <img src={reactImg} alt="react logo"/>
            <p className="skill-title">React.js</p>
        </div>

        <div className="skill node">
            <img src={node} alt="react logo"/>
            <p className="skill-title">Node.js</p>
        </div>

        <div className="skill vscode">
            <img src={vs} alt="react logo"/>
            <p className="skill-title">VS Code</p>
        </div>

        <div className="skill vscode">
            <img src={sass} alt="react logo"/>
            <p className="skill-title">Sass</p>
        </div>

        <div className="skill vscode">
            <img src={less} alt="react logo"/>
            <p className="skill-title">Less</p>
        </div>

        <div className="skill git">
            <img src={git} alt="react logo"/>
            <p className="skill-title">Git</p>
        </div>
    </div>
    );
}

export default Skills;
