import React from "react"
import "./footer.css"

const Footer = () => (
  <footer>
    {/* <div className={styles.footer__logo} /> */}
    <div className="footer__partners-container">
      <p className="footer__partners-heading">
        grace travel partners
      </p>
      <div className="footer__partners-links-container">
        <div className="partners-links__row">
          <a href="http://www.gracebrunei.com/clubmed/">Club Med</a>
          <a href="http://www.gracebrunei.com/koreanair/">Korean Air</a>
        </div>
        <div className="partners-links__row">
          <a href="http://www.gracebrunei.com/bangkokhospital/">
            Bangkok Hospital
          </a>
          <a href="http://www.gracebrunei.com/bangkokairways/">Bangkok Air</a>
        </div>
      </div>
    </div>
    <div className="footer__general-links">
      <a href="http://www.gracebrunei.com/aboutus/">About</a>
      <a href="#">Contact Us</a>
      <a href="http://www.gracebrunei.com/tours/">Tours</a>
    </div>
    <p className="footer__copyright">
      Grace Travel Agnecy is not responsible for content on external Websites.{" "}
      <br />
      Copyright 2019 Grace Travel Agency. All rights reserved.
    </p>
  </footer>
)

export default Footer