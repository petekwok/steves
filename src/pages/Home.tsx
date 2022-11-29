import React from 'react';
import { Path } from '../components/AppRoutes';
import { Link } from 'react-router-dom';
const Home: React.FC<{}> = () => {
  return (
    <>
      <div className="home-section">
        <section>
          <div className="img-fluid">
            <div className="container">
              <div className="row height align-items-center justify-content-center">
                <div className="home-banner-content d-flex flex-column align-items-center justify-content-center mt-3">
                  <div className="col-lg-10 d-flex flex-column align-items-center">
                    <h1
                      className="big-title fadeMe"
                      style={{ display: 'block' }}
                    >
                      {' '}
                      Welcome to Steve's Fish and Chips
                    </h1>
                    <p className="intro-text">
                      FIND US IN UPPER BRIGHTON ROAD, WORTHING!
                    </p>
                    <br />
                    <h2>Restaurant / Takeaway Opening Times</h2>

                    <p className="intro-text">
                      <br />
                      TUESDAY - FRIDAY 12:00PM TO 20:30PM
                      <br />
                      SATURDAY 16:30PM TO 21:00PM
                      <br />
                    </p>
                    <Link to={Path.clickCollect}>
                      <h2>Click &amp; Collect</h2>
                    </Link>
                    <p className="intro-text">
                      TUESDAY - FRIDAY 12:00PM TO 20:30PM
                      <br />
                      SATURDAY 16:30PM TO 21:00PM
                      <br />
                    </p>
                    <p className="intro-text tel">
                      <a href="tel:019 0323 8837">019 0323 8837</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
