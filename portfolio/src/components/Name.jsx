import React from 'react';

const Name = () => {
    return (
        
    <div className='info'>
        <h4 className="name">Joshua Humphrey</h4>
        <h4 className="title">Front-End Developer</h4>
        <h4 className="location">Texas,United States</h4>
        <div className="git-in">
            <a href='https://www.linkedin.com/in/joshahumphrey/'
                className='social-link'><i className=" nav fab fa-linkedin fa-2x"></i></a>
                <a href='https://github.com/Humphreyj' className='social-link'>
            <i className="fab fa-github fa-2x"></i></a>
        </div>
    </div>
        
    );
}

export default Name;
