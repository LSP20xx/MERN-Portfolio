import React, { useState } from "react";
import "./_styles.scss";

export const Education = () => {
  const title = 'Education';
  const education = [
    {
      path: "Psychology", milestones: [
        { title: "Bachelor in Psychology", institution: "Universidad de Buenos Aires", date: "2015-2019" }, {
          title: "Diploma in Disabilities Studies", institution:
            "Buenos Aires City Government", date: "2013 - 2014"
        }, {
          title: "Diploma in User Experience Design", institution:
            "Universidad Tecnológica Nacional", date: "2019 - 2020"
        }
      ]},
    {
      path: "Computer Science", milestones: [
        { title: "Computer Science and Engineering", institution: "Universidad de Argentina de la Empresa", date: "2020 - Currently"},
        { title: "Diploma in Full Stack Web Development", institution: "Argentina Programa", date: "2021 - 2022" }, {
          title: "Diploma in Data Science and Artificial Intelligence", institution: "Argentina Programa", date: "2022 - Currently"
        }
      ]
    }
  ];

  const [activePath, setActivePath] = useState("Computer Science");

  const handlePathChange = (path) => {
    setActivePath(path);
  };

  return (
    <section className="educationContainer">
      <h1 className="educationTitle">{title}</h1>
      <ul className='educationControls'>
        {education.map((edu, index) => (
        <React.Fragment key={edu.path}>
          <li className={`indicator ${activePath === edu.path ? "active" : ""}`} onClick={() => handlePathChange(edu.path)}>
            <span className="tag">{edu.path}</span>
          </li>
          {index < education.length - 1 && (
            <li className="horizontalBar"></li>
          )}
        </React.Fragment>
        ))}
      </ul>
      <ul className="educationList">
        {education.find((edu) => edu.path === activePath).milestones.map((milestone) => (
          <li key={milestone.title}>
            <h3>{milestone.title}</h3>
            <p>{milestone.institution} </p>
            <p>({milestone.date})</p>
          </li>
        ))}
      </ul>
    </section>
  );
};