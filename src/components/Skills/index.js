import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Skills = () => {
  const skills = [
    'Instagram',
    ' Facebook',
    'Twitter (X)',
    'TikTok',
    'YouTube',
    'Facebook Ads Manager',
    'Google Ads',
    'Understanding, retargeting, and paid social campaigns.',
    'Managing online communities, engaging with audiences, and responding to comments/messages professionally.',
    'Generating fresh ideas for posts, campaigns, and content strategies',
    'Strong verbal and written communication skills to collaborate with teams and engage audiences.',
    'Managing multiple projects, deadlines, and campaigns efficiently.',
    'Adjusting strategies to align with trends, platform updates, and audience preferences.'

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
            As a passionate social media professional, I am deeply committed to understanding the ever-evolving digital landscape and leveraging it to drive meaningful engagement. My expertise lies in crafting impactful campaigns, analyzing trends,
            and building strong online communities across platforms like Instagram, Facebook, Tiktok, and Snapchat.
          </p>
          <p>
            While my primary focus is on strategy and content creation, I’ve also gained hands-on experience with analytics and paid advertising, giving me a well-rounded perspective. Ultimately,
            it’s the art of storytelling and connecting with audiences that fuels my passion for social media.
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
