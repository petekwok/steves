import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Path } from './AppRoutes';

const Navbar: React.FC<{}> = () => {
  const navLeft = [
    ['Menu', Path.menu],
    ['Click & Collect', Path.clickCollect],
  ];
  const navRight = [
    ['Location', Path.location],
    ['About', Path.about],
  ];
  return (
    <div className="navbar-section">
      <header className="header-nav border-bottom">
        <a href="/" className="d-flex justify-content-center">
          <img
            src={require('../images/logo.svg').default}
            className="logo_div nav-logo-small"
            width="140"
            alt="steves"
          />
        </a>
        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div
            className="navbar-collapse collapse w-150"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav w-100 align-items-center justify-content-end">
              {navLeft.map(([text, linkTo], idx) => (
                <li className="nav-item mx-2" key={idx}>
                  <Link className="nav-link" to={linkTo}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="/" className="nav-logo-wide mx-2">
              <img
                src={require('../images/logo.svg').default}
                className="logo_div"
                width="140"
                alt="steves"
              />
            </a>
            <ul className="navbar-nav w-100 align-items-center justify-content-start">
              {navRight.map(([text, linkTo], idx) => (
                <li className="nav-item mx-2" key={idx}>
                  <Link className="nav-link" to={linkTo}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
