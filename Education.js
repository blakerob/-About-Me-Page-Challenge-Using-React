// src/components/Education.js

import React from 'react';
import './Education.css'; // Import CSS file for styling

const Education = ({ institution, degree, years }) => {
    return (
        <div className="education">
            <h3>{institution}</h3>
            <p>{degree}</p>
            <p>{years}</p>
        </div>
    );
}

export default Education;
