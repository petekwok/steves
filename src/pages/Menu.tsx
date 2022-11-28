import React from 'react';

const Menu: React.FC<{}> = () => {
  return (
    <>
      <div className="menu-section">
        <section>
          <div className="container">
            <div className="col-lg-12 mob_show">
              <a
                href="https://poppiesfishandchips.co.uk/wp-content/uploads/2022/11/MENU-7.9.22.pdf"
                target="_blank"
                title="MENU-7.9.22.pdf"
              >
                <div className="dwld-menu-btn blue-bg hvr-bounce-in">
                  Download
                </div>
              </a>
              <div className="noborder blue-bg shadow">
                <img src={require('../images/menu.jpg')} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Menu;
