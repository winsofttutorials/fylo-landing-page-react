import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import phone from "../../images/icon-phone.svg";
import email from "../../images/icon-email.svg";
const Footer = () => {
  return (
    <>
      <section className="f-wrapper">
        <div className="f-container">
          <img src={logo} alt="logo" />
          <div className="flexStartCol link-wrapper">
            <div className="flexStartCol left-footer">
              {/* Contacts */}
              <div className="contacts">
                <a href="contact">
                  <img src={phone} alt="phone" /> Phone: +1-543-123-4567
                </a>
                <a href="contact">
                  <img src={email} alt="phone" /> Phone: +1-543-123-4567
                </a>
              </div>
              <div className="contact-links">
                <a href="About.html">About Us</a>
                <a href="About.html">Jobs</a>
                <a href="About.html">Press</a>
                <a href="About.html">Blog</a>
              </div>
            </div>
            <div className="flexStartCol right-footer">
              <div className="contact-links">
                <a href="About.html">Contact Us</a>
                <a href="About.html">Terms</a>
                <a href="About.html">Privacy</a>
              </div>
              <div className="Social-links">
                <span>
                  <a href="http://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </span>
                <span>
                  <a href="http://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                  </a>
                </span>
                <span>
                  <a href="http://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
