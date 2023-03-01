import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="./images/photo-grid.png"
        alt=""
        className="hero--img"
        width="150"
      />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
