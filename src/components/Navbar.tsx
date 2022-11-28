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
        <div className="container-fluid">
          <div className="row">
            <a href="/" className="d-flex justify-content-center">
              <img
                src={require('../images/logo.svg').default}
                className="logo_div nav-logo-small"
                width="140"
                alt="steves"
              />
            </a>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="col-md-5 nav navbar-nav mr-auto d-flex align-items-center justify-content-end">
                  <li key={'logosmall'}></li>
                  {navLeft.map(([text, linkTo], idx) => (
                    <li className="nav-item mx-2" key={idx}>
                      <Link className="nav-link" to={linkTo}>
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="col-md-2 d-flex justify-content-center align-items-center">
                  <a href="/" className="nav-logo-wide">
                    <img
                      src={require('../images/logo.svg').default}
                      className="logo_div"
                      width="140"
                      alt="steves"
                    />
                  </a>
                </div>
                <ul className="col-md-5 nav navbar-nav mr-auto d-flex align-items-center justify-content-start">
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
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
