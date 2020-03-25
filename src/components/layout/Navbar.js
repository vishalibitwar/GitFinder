import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className="navbar px-5 py-2 navbar-dark bg-dark mb-4 text-white ">
      <h1> <span><i className="fab fa-github"></i> </span> {props.title} </h1>
      <ul className="navbar-nav d-flex flex-row  justify-content-center align-items-center"  >
        <li className="nav-item">
          <Link className="nav-link mx-2" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link mx-2" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder'
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar
