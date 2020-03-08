import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components';

//images
import lander from '../img/lander.png';
import outpost from '../img/outpost.png';
import quick from '../img/quick.png';
import nasa from '../img/nasa.png';

const Div = styled.div`
width: 90%;
margin: 0 auto;
background-color: #000;
.skills {
    
color: white;
    h1 {
        font-family: 'Sen', sans-serif;
        text-decoration: underline;
        
    }
    div {
        display: flex; 
        flex-wrap: wrap;
        justify-content: center;
        padding: 3%;
      
        
        p {
            margin: 1em 1em;
            font-size: 1.1em;
            font-family: 'Open Sans', sans-serif;
        }
    }
}
.legend {
    a {
        color: white;
    }
}
.chart-label {
    color: white;
    a {
        color: white;
        text-shadow: 1px 1px 1px #444;
    }
}
.chart  {
    width: 99%;
    margin: 0 auto;
}


`

const Slideshow = () => {
    return (
        <Div>
            <Carousel 
            className='slides'
            infiniteLoop={true}
            // autoPlay= {true}
            transitionTime ={5} >
            <div>
                <img src={lander} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div>
                    <p>HTML <i className="fab fa-html5"></i></p>
                    <p>CSS <i className="fab fa-css3-alt"></i></p>
                    <p>LESS <i className="fab fa-less"></i></p>
                    <p>JavaScript <i className="fab fa-js-square"></i></p>
                    <p>React.js <i className="fab fa-react"></i></p>
                    <p>Redux <i className="fab fa-js-square"></i></p>
                    <p>Node.js <i className="fab fa-node-js"></i></p>
                    <p>SQLite <i className="fas fa-database"></i></p>
                    <p>GIT <i className="fab fa-github-square"></i></p>
                </div>
            </div>
            <div>
                <img src={quick} />
                <div className="legend">
                    <a href="https://quick-dice.netlify.com" target="_blank">Quick Dice</a>
                    <p className="project-description">A React Web App for tabletop RPG players. Users can save common dice rolls for quick use.</p>
                    <a href="https://github.com/Humphreyj/quickr-dice" target="_blank">View Code</a>
                </div>
            </div>
            <div>
                <img src={outpost} />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src={nasa} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
        <h4 className='chart-label'>My <a href="https://github.com/Humphreyj" target='_blank'>Github</a> chart. </h4>
        <img className='chart' src={`http://ghchart.rshah.org/humphreyj`} />
        </Div>
        
    );
}

export default Slideshow;
