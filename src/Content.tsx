import React from "react";
import SPImage from "./images/icon-snappy-process.svg";
import APImage from "./images/icon-affordable-prices.svg";
import PFImage from "./images/icon-people-first.svg";
import Button from "./shared/Button";

export default () => {
  return (
    <section className="content">
      <h2 className="content__header">We're different</h2>
      <Card
        imgSrc={SPImage}
        title="Snappy Process"
        text="Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms."
      />
      <Card
        imgSrc={APImage}
        title="Affordable Prices"
        text="We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
      />
      <Card
        imgSrc={PFImage}
        title="People First"
        text="Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
      />
      <footer className="content__footer">
        <h3>Find out more about how we work</h3>
        <Button id="content-button" className="button button--normal button--white" label="how we work" />
      </footer>
    </section>
  );
};

const Card = ({
  imgSrc,
  title,
  text,
}: {
  imgSrc: string;
  title: string;
  text: string;
}) => (
  <section className="content__card">
    <img className="content__card-img" src={imgSrc} alt="" />
    <h2 className="content__card-title">{title}</h2>
    <p className="content__card-text">{text}</p>
  </section>
);
