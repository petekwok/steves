const Footer: React.FC<{}> = () => {
  return (
    <div className="footer-section">
      <footer className="py-4 bg-light">
        <div className="container d-flex flex-column align-items-center">
          <div className="col-lg-12 text-center">
            <p>
              © {new Date().getFullYear()}-{new Date().getFullYear() + 1} Steves
              Fish and Chips. All Rights Reserved
            </p>
          </div>
          <div className="col-lg-12 social-right d-flex gap-4 justify-content-center">
            <a
              href="https://facebook.com/skillojo"
              target="new"
              className="icon-button facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
              <span></span>
            </a>
            <a
              href="https://twitter.com/skillojous"
              target="new"
              className="icon-button twitter"
            >
              <i className="fa-brands fa-twitter"></i>
              <span></span>
            </a>
            <a
              href="https://www.instagram.com/skillojo/"
              target="new"
              className="icon-button google-plus"
            >
              <i className="fa-brands fa-instagram"></i>
              <span></span>
            </a>
            <a
              href="https://www.linkedin.com/showcase/skillojo"
              target="new"
              className="icon-button youtube"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span></span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
