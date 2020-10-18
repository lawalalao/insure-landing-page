import React from "react";
import IntroImg from "./images/image-intro-desktop.jpg";
import Button from "./shared/Button";

export default () => (
  <div className="intro__backdrop">
    <div className="intro__banner">
      <img className="intro__img" src={IntroImg} alt="family-of-4" />
      <section className="intro__content">
        <h2 className="intro__header">Humanizing your insurance. </h2>
        <p className="intro__subheader">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <Button id="intro-btn" className="button button--normal button--white" label="view plans"/>
      </section>
    </div>
  </div>
);
