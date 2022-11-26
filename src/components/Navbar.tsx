import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Path } from './AppRoutes';

const Navbar: React.FC<{}> = () => {
  const navLinks = [
    ['About', Path.about],
    ['Menu', Path.menu],
    ['Location', Path.location],
    ['Click & Collect', Path.clickCollect],
  ].filter((a) => a);
  return (
    <div className="navbar-section">
      <header className="header-nav border-bottom">
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img
                  src={require('../images/logo.svg').default}
                  className="logo_div"
                  width="140"
                  alt="steves"
                />
              </a>
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
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto d-flex align-items-center">
                  {navLinks.map(([text, linkTo], idx) => {
                    return (
                      <li className="nav-item" key={idx}>
                        <Link className="nav-link" to={linkTo}>
                          {text}
                        </Link>
                      </li>
                    );
                  })}
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
