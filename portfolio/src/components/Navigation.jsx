import React from 'react';
import styled from 'styled-components';

const Div = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 2%;
border-bottom: 2px solid black;
font-family: 'Sen', sans-serif;
font-size: 1.2em;
font-weight: bold;
text-shadow: 2px 2px 1px #333;
color: white;
background-color: #000;

    .links {
        p {
            margin: 0em .5em;
        }
        display: none;
        @media(min-width: 800px) {
            display: flex;
        justify-conetent: space-between;
        }
    }
    .bars {
        @media(min-width: 800px) {
            display: none;
        }

    }



`

const Navigation = () => {
    return (
        <Div>
            
                <p>Joshua Humphrey</p>
                <p>Full-Stack Developer</p>
            

            <div className="links">
                <p>Projects</p>
                <p>Resume</p>
                
            </div>
            <i className="fas fa-bars bars"></i>
            
        </Div>
    );
}

export default Navigation;
