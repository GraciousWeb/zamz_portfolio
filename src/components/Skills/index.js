import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Java',
    'MySQL',
    'Spring Boot',
    'Postgres',
    'Servlet',
    'JSP',
    'XML',
    'Scrum',
    'Bootstrap',
    'Agile methods',
    'JSON',
    'Git',
    'GitHub',
    'REST',
    'SOAP',
    'API',
    'Postman',
    'Kanban',
  ];
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container-skills skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            As a dedicated student of the programming arts, I am deeply
            committed to mastering the core principles and applying them in
            practical scenarios. I have a specific interest in backend
            development, which is my chosen field of specialization. My
            proficiency lies predominantly within the Java, Spring Boot, React, and
            MySQL domains.
          </p>
          <p>
            Despite this focus, I have also amassed experience in frontend
            development, further broadening my skill set. But ultimately, it's
            the intricate architecture of the backend where my passion truly
            resides.
          </p>
        </div>
        <div className="skills-zone">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Skills;
