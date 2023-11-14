import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import Adire from '../../assets/images/portfolio/Adire.png';
import safari from '../../assets/images/portfolio/safari.png';
import wakanow from '../../assets/images/portfolio/wakanow.png';
import airtimeCash from '../../assets/images/portfolio/airtime-cash.png';
import certificate from '../../assets/images/portfolio/hyperskill-certificate.png';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Project Adire',
      description:
        'Streamlines customer management, order tracking, and decision-making. Tailored for tailors of all sizes, it boosts productivity with an intuitive, user-friendly interface.',
      image: Adire,
      url: 'https://adire1.vercel.app/',
    },
    {
      name: 'Project Wakanow',
      description:
        'Explore props for film/theater like cars, set decor. Connect with production companies for equipment and collaboration.',
      image: wakanow,
      url: 'https://www.wakacast.com/',
    },
    {
      name: 'Project Safari',
      description:
        'A versatile ecommerce platform offering diverse products, seamless transactions, and a user-friendly experience for online shoppers globally.',
      image: safari,
      url: 'https://safari-store.vercel.app/home#',
    },
    {
      name: 'Project Airtime To Cash',
      description:
        'An app to convert airtime to cash, offering convenience and ease for users to exchange mobile credit for money.',
      image: airtimeCash,
      url: 'https://airtimetocashpodg.netlify.app/#about-us',
    },
    // {
    //   name: 'Hyperskill Certificate',
    //   description:
    //     'Solved 1,407 problems and mastered 251 topics, covering most concepts of Java. Completed 8 projects, earning the Developer Certificate from Hyperskill, endorsed by JetBrains Academy.',
    //   image: certificate,
    //   url: 'https://github.com/kelly96E/HyperSkill-Projects',
    // },
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
