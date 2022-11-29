import React from 'react';

const Location: React.FC<{}> = () => {
  return (
    <>
      <div className="location-section">
        <section>
          <div className="container">
            <div className="col-lg-12 mob_show">
              <div className="noborder d-flex flex-column align-items-center mb-4 mt-4">
                <h2>Steve's Fish and Chips</h2>
                <span className="d-flex flex-column align-items-center mb-4">
                  M - T: 11.00am to 11.00pm
                  <br />
                  F - S: 11.00am to 11.30pm
                  <br />
                  S: 11.00am to 10.30pm
                  <br />
                  <a href="tel:019 0323 8837">019 0323 8837</a>
                  Downlands Parade, 3 Upper Brighton Rd, Worthing BN14 9JH
                  <br />
                </span>
                <img src={require('../images/location.png')} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Location;
