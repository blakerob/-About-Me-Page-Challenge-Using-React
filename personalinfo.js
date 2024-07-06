// src/components/PersonalInfo.js

import React from 'react';
import './PersonalInfo.css'; // Import CSS file for styling

const PersonalInfo = () => {
    return (
        <div className="personal-info">
            <h1>Blake Robinson</h1>
            <p>I'm from Jacksonville, Florida. I am a student at the University of South Florida, entering my senior year. I'm looking to graduate december 2024 with a degree in Business Analytics with Information Systems.</p>
            <div className="contact-info">
                <p>Email: blakejrob2003@gmail.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/blakejrob/">Blake Robinson</a></p>
            </div>
        </div>
    );
}

export default PersonalInfo;
