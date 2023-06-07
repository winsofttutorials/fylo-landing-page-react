import React, { Component, useState } from "react";
import "./Hero.css";
import illustrator1 from "../../images/illustration-1.svg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [borderCol, setBorderCol] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setBorderCol(e.target.borderCol);
  };

  const emailValidation = () => {
    const regEx = /^[A-Za-z\._\-0-9]*[@]*[A-Za-z]*[\.][a-z]{3,3}$/;
    if (regEx.test(email)) {
      setMessage("Succesful");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
    } else {
      setMessage("");
    }
  };

  return (
    <>
      <section className="flexStartCol hero">
        {/*left*/}
        <div className="leftSide">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family
            and co-workers.
          </p>
          <div className="flexStartCol emailField">
            <input
              id="emailFeed"
              placeholder="Enter your email..."
              value={email}
              onChange={handleChange}
            />
            <button type="submit" className="button" onClick={emailValidation}>
              Get Started
            </button>
            <br />
            <p className="message">{message}</p>
          </div>
        </div>
        {/*right*/}
        <div className="rightSide">
          <div className="photoGrid">
            <img src={illustrator1} alt="illustrator" width={700} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
