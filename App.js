// src/App.js

import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <PersonalInfo />
                <section className="skills-section">
                    <h2>Skills</h2>
                    <Skill name="Microsoft Excel" proficiency="Advanced" />
                    <Skill name="Communication" proficiency="Advanced" />
                    <Skill name="Tableau" proficiency="Intermediate" />
                    <Skill name="Data Analysis" proficiency="Intermediate" />
                </section>
                <section className="experience-section">
                    <h2>Experience</h2>
                    <Experience
                        title="AI Small Business Developer Intern/Contractor"
                        company="Jacksonville Chamber of Commerce"
                        duration="2018 - 2024"
                    />
                    <Experience
                        title="Finance & Data Science Intern"
                        company="Jacksonville Transportation Authority"
                        duration="June - August 2023 & 2024"
                    />
                </section>
                <section className="education-section">
                    <h2>Education</h2>
                    <Education
                        institution="Fleming Island High School"
                        degree="High School Diploma"
                        years="2017 - 2021"
                    />
                    <Education
                        institution="University of South Florida"
                        degree="Bachelors Degree"
                        years="2021 - 2024"
                    />
                    
                </section>
            </header>
        </div>
    );
}

export default App;
