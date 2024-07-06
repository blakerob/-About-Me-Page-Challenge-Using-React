// src/components/Experience.js

import React from 'react';
import './Experience.css'; // Import CSS file for styling

const Experience = ({ title, company, duration }) => {
    return (
        <div className="experience">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{duration}</p>
        </div>
    );
}

export default Experience;