import React from "react";
import "./Productive.css";
import badge from "../../images/icon-arrow.svg";
import quote from "../../images/icon-quotes.svg";
import userPic from "../../images/avatar-testimonial.jpg";
import illustrator from "../../images/illustration-2.svg";
const Productive = () => {
  return (
    <section className="p-wrapper">
      <div className="p-container">
        <div className="flexStartCol row">
          <div className="col1">
            <h1>Stay productive, wherever you are</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachment required!
            </p>
            <a href="">
              See how Fylo works <img src={badge} alt="icon" />
            </a>
            <div className="testimonial-wrapper">
              <div className="t-container">
                <img src={quote} alt="quote" />
                <p>
                  Fylo has improve our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flexStartCol user-profile">
                  <img src={userPic} alt="profilePic" width={40} />
                  <div>
                    <h3>Kyle Burton</h3>
                    <p>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col2">
            <div className="image-frame">
              <img src={illustrator} alt="illustrator2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Productive;
