/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import planet from '../images/planet.png';

const Navbar = () => (
  <div className="nav-bar">
    <a className="nav-brand" href="#/"><img className="navbar-logo" alt="" src={planet} /></a>
    <ul className="nav-list" id="list-nav">
      <li><NavLink to="/" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>Rockets</NavLink></li>
      <li><NavLink to="/missions" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>Missions</NavLink></li>
      <li><NavLink to="/myprofile" className={(navData) => (navData.isActive ? 'nav-link active-link' : 'nav-link')}>My Profile</NavLink></li>
    </ul>
  </div>
);

export default Navbar;
