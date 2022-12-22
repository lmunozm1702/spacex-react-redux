/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import planet from '../images/planet.png';

const Navbar = () => (
  <div className="nav-bar container">
    <a className="nav-brand" href="#/">
      <img className="navbar-logo" alt="" src={planet} />
      <h1>Space Travelers&apos; Hub</h1>
    </a>
    <ul className="nav-list">
      <li><NavLink to="/" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>Rockets</NavLink></li>
      <li><NavLink to="/missions" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>Missions</NavLink></li>
      <li>|</li>
      <li><NavLink to="/myprofile" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>My Profile</NavLink></li>
    </ul>
  </div>
);

export default Navbar;
