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
            <div className="container p-4">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                  <div className="border deliver border-5 white ">
                    <a
                      target="_blank"
                      href="https://www.ubereats.com/gb/store/steves-fish-%26-chips/ZR__MpsRXVCoesanXiJCaQ/?utm_campaign=place-action-link&utm_medium=organic&utm_source=google"
                    >
                      <div className="loc_pic_sq deliveroo d-flex flex-column align-items-center gap-2 p-3">
                        <div className="icondiv d-flex align-items-center justify-content-center">
                          <img
                            alt="deliveroo"
                            data-src="../images/uber-eats.png"
                            className="deliver-logo"
                            src={require('../images/uber-eats.png')}
                          />
                        </div>
                        <h2 className="people-box-sub-title">Uber eats</h2>
                        <div className="order-btn border deliver border-2 white p-2">
                          Order now
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-3">
                  <div className="border deliver border-5 white ">
                    <a
                      target="_blank"
                      href="https://www.just-eat.co.uk/restaurants-steves-fish-and-chips-worthing/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction"
                    >
                      <div className="loc_pic_sq deliveroo d-flex flex-column align-items-center gap-2 p-3">
                        <div className="icondiv d-flex align-items-center justify-content-center">
                          <img
                            alt="deliveroo"
                            data-src="../images/just-eat.png"
                            className="deliver-logo"
                            src={require('../images/just-eat.png')}
                          />
                        </div>
                        <h2 className="people-box-sub-title">Just Eat</h2>
                        <div className="order-btn border deliver border-2 white p-2">
                          Order now
                        </div>
                      </div>
                    </a>
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
