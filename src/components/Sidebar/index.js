import React from 'react';
import {NavLink, useLocation } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
// import {
//   faDiscord,
//   faGithub,
//   faLinkedin,
// } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';

  return (
    <div className={`nav-bar ${isPortfolioPage ? 'portfolio' : ''}`}>

      <nav>
        <NavLink exact activeClassName="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeClassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="skills-link" to="/skills">
          <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact
          activeClassName="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/invites/contact/?i=1otj2sbbfl0tm&utm_content=i8fel87"
          >
            <FontAwesomeIcon icon="fa-brands fa-instagram" color="#4d4d4e"/>
            {/*<FontAwesomeIcon icon={faIn} color="#4d4d4e" />*/}
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@barbiezamz?_t=ZM-8tCw5ZFefzC&_r=1"
          >
            {/*<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />*/}
            <FontAwesomeIcon icon="fa-brands fa-tiktok" color="#4d4d4e" />
          </a>
        </li>
        {/*<li>*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    rel="noreferrer"*/}
        {/*    href="https://www.tiktok.com/@barbiezamz?_t=ZM-8tCw5ZFefzC&_r=1"*/}
        {/*  >*/}
        {/*    <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
};

export default Sidebar;
