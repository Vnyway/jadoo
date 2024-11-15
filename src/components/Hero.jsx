import React, { useState } from "react";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <section className="hero">
      <div className="hero__content">
        <h4>Best Destinations around the world</h4>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="hero__content__buttons">
          <button className="hero__content__more-button">Find out more</button>
          <button
            className="hero__content__play-button"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}>
            <div>
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 6.5L0.749999 12.9952L0.75 0.00480889L12 6.5Z"
                  style={{ transition: "all .3s ease-out" }}
                  fill={hovered ? "#DF6951" : "white"}
                />
              </svg>
            </div>
            <span>Play Demo</span>
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img src="./images/general/traveler.png" alt="traveler" />
      </div>
    </section>
  );
};

export default Hero;
