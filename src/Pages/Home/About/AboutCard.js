import React from 'react';
import './About.css'

const AboutCard = ({image, heading, paragraph }) => {
    return (
        <div className='card-container'>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div>
                <h2 style={{color: '#080337', margin: '24px 0 10px 0'}}>{heading}</h2>
                <p style={{color: '#787C8B'}}>{ paragraph}</p>
            </div>
        </div>
    );
};

export default AboutCard;