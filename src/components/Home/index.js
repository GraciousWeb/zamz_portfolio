import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate');

  const nameArray = [' ', 'Z', 'a', 'm', 'z'];
  const hiArray = ['H', 'i', ','];
  const imArray = ['I', "'", 'm ', " "];
  const systemDeveloperArray = [
    'A',
    ' ',
    'S',
    'o',
    'c',
    'i',
    'a',
    'l',
    ' ',
    'M',
    'e',
    'd',
    'i',
    'a',
    ' ',
    'M',
    'a',
    'n',
    'a',
    'g',
    'e',
    'r',

  ];

  useEffect(() => {
    setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              delay={1}
            />
            <br />
            <span className="intro">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={imArray}
                delay={1 + hiArray.length * 0.1}
              />
              <AnimatedLetters
                wrapperClass="nameWrapper"
                letterClass={letterClass}
                strArray={nameArray}
                delay={1 + (hiArray.length + imArray.length) * 0.1}
              />
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={systemDeveloperArray}
              delay={
                1 + (hiArray.length + imArray.length + nameArray.length) * 0.1
              }
            />
          </h1>
          <h2>Social Media Manager</h2>
          <Link to="/contact" className="flat-button">
            {' '}
            CONTACT ME{' '}
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
