import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Path } from './AppRoutes';

const Navbar: React.FC<{}> = () => {
  const navLinks = [
    ['Menu', Path.menu],
    ['Click & Collect', Path.clickCollect],
    ['Location', Path.location],
    ['About', Path.about],
  ].filter((a) => a);
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
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto d-flex align-items-center justify-content-center">
                  <li className="nav-logo-small" key={'logo'}>
                    <a href="/">
                      <img
                        src={require('../images/logo.svg').default}
                        className="logo_div"
                        width="140"
                        alt="skillojo"
                      />
                    </a>
                  </li>
                  {navLinks.map(([text, linkTo], idx) => {
                    return (
                      <>
                        {idx === navLinks.length / 2 && (
                          <li className="nav-logo-wide mx-2" key={'logo'}>
                            <a href="/">
                              <img
                                src={require('../images/logo.svg').default}
                                className="logo_div"
                                width="140"
                                alt="skillojo"
                              />
                            </a>
                          </li>
                        )}
                        <li className="nav-item mx-2" key={idx}>
                          <Link className="nav-link" to={linkTo}>
                            {text}
                          </Link>
                        </li>
                      </>
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
