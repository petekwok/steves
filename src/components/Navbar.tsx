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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="col-md-5 nav navbar-nav mr-auto d-flex align-items-center justify-content-end">
                  <li key={'logosmall'}>
                    <a href="/" className="nav-logo-small">
                      <img
                        src={require('../images/logo.svg').default}
                        className="logo_div"
                        width="140"
                        alt="skillojo"
                      />
                    </a>
                  </li>
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
                      alt="skillojo"
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
