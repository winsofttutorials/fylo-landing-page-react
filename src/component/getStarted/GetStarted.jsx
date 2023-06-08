import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="flexStartCol g-container">
        {/* left */}
        <div className="getStart-left">
          <h2>Get early access today</h2>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        {/* right */}
        <div className="getStart-right">
          <div className="getStartedFrame">
            <input
              placeholder="email@example.com"
              value={"wiphod@gmail.com"}
              onChange={() => {}}
            />
            <br />
            <button type="submit" className="button">
              Get Started For Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetStarted;
