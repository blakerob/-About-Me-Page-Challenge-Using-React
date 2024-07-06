// src/components/Skill.js

import React from 'react';
import './Skill.css'; // Import CSS file for styling

const Skill = ({ name, proficiency }) => {
    return (
        <div className="skill">
            <h3>{name}</h3>
            <p>Proficiency: {proficiency}</p>
        </div>
    );
}

export default Skill;
