import React, { useState } from 'react';
import './_styles.scss'

export const Skills = () => {
    const title = 'Skills';
    const skills = [
        {
            name: 'Frontend',
            techs: [
                'HTML',
                'React',
                'CSS',
                'Angular',
                'JavaScript',
                'Bootstrap',
                'TypeScript',
                'Tailwind',
                'SASS',
                'Figma'
            ]
        },
        {
            name: 'Web3',
            techs: [
                'Solidity',
                'Web3.js',
                'Rust',
                'Ethers.js',
                'Yul',
                'Hardhat.js',
                'ENS',
                'Ganache',
                'IPFS',
                'Truffle'
            ]
        },
        {
            name: 'Backend',
            techs: [
                'Node.js',
                'MongoDB',
                'Express.js',
                'SQL',
                'Django',
                'PostgreSQL',
                'Flask',
                'GraphQL',
                'FastAPI',
                'Docker'
            ]
        }
    ];
    // The buttonActive state is used to keep track of the active skill button
    const [buttonActive, setButtonActive] = useState(0); // The default active button is the first one

    const handleButtonActive = (index) => {
        setButtonActive(index);
    };

    return (
        <section className='skillsContainer'>
            <h1 className='skillsTitle'>{title}</h1>
            <div className='skillsControls'>
                {skills.map((skill, index) => (
                    <button
                        key={index}
                        className={`skillButton ${skill.name} ${index === buttonActive ? 'active' : ''}`}
                        onClick={() => handleButtonActive(index)}
                        aria-label={`Button to show ${skill.name} skills`}
                    >
                        {skill.name}
                    </button>
                ))}
            </div>
            <ul className="skillsList">
                {skills[buttonActive].techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

        </section>
    );
};