import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import cookbook from '../../assets/images/portfolio/cook-book.png';
import webshop from '../../assets/images/portfolio/Webshop.png';
import calendar from '../../assets/images/portfolio/Calendar.png';
import flickr from '../../assets/images/portfolio/flickr.png';
import certificate from '../../assets/images/portfolio/hyperskill-certificate.png';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Project Cookbook',
      description:
        'This is a recipe book web application developed using the Spring framework, JS and MySQL, together with a team of 4 people. Soon ready to be launched..',
      image: cookbook,
      url: 'https://github.com/Okafor-Samuel/RecipeBookMVC.git',
    },
    {
      name: 'Project Webshop',
      description:
        'This is my final project for an advanced JS course, where I created a webshop using React and Firebase.',
      image: webshop,
      url: 'https://kelly96e.github.io/java22-avjs-slutprojekt-shkelqim-gashi/',
    },
    {
      name: 'Project Calendar',
      description:
        'This is my final project for a Java course, where I developed a weekly calendar application using Java and the Swing framework.',
      image: calendar,
      url: 'https://github.com/kelly96E/JAVA22-java1-slutprojekt-shkelqim-gashi',
    },
    {
      name: 'Project Flickr',
      description:
        'I created a Flickr photo search web app for my final project in JavaScript course, showcasing my skills in dynamic user interface design and using APIs.',
      image: flickr,
      url: 'https://kelly96e.github.io/java22-js-slutprojekt-shkelqim-gashi/',
    },
    {
      name: 'Hyperskill Certificate',
      description:
        'Solved 1,407 problems and mastered 251 topics, covering most concepts of Java. Completed 8 projects, earning the Developer Certificate from Hyperskill, endorsed by JetBrains Academy.',
      image: certificate,
      url: 'https://github.com/kelly96E/HyperSkill-Projects',
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [beginAnimation, setBeginAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      const animationTimer = setTimeout(() => {
        setBeginAnimation(true);
      }, 100);

      return () => {
        clearTimeout(animationTimer);
      };
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderPortfolio = (projects) => {
    return (
      <div className="images-container">
        {projects.map((project, idx) => {
          return (
            <div
              className={`image-box ${beginAnimation ? 'animated fadeIn' : ''}`}
              style={{
                animationDelay: `${idx * 0.1}s`,
                animationDuration: '1s',
              }}
              key={idx}
            >
              <img
                src={project.image}
                alt={project.name}
                className="portfolio-image"
              />{' '}
              <div className="content">
                <h3 className="title">{project.name}</h3>
                <p className="description">{project.description}</p>
                <button
                  className="btn"
                  onClick={() => window.open(project.url)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader type="pacman" className="loader-active" />
      ) : (
        <div className="container-portfolio portfolio-page">
          {renderPortfolio(projects)}
        </div>
      )}
    </>
  );
};

export default Portfolio;
