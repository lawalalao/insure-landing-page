import React from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";

export default () => {
  const SiteMapData = [
    ["our company", "how we work", "why insure?", "view plans", "reviews"],
    ["help me", "faq", "terms of use", "privacy policy", "cookies"],
    ["contact", "sales", "support", "live chat"],
    ["others", "careers", "press", "licences"],
  ];

  return (
    <div className="footer__wrapper">
      <footer className="footer">
        <div className="footer__header">
          <Logo className="footer__logo" />
          <div className="footer__media">
            <Facebook className="social__icon" />
            <Twitter className="social__icon" />
            <Pinterest className="social__icon" />
            <Instagram className="social__icon" />
          </div>
        </div>
        <hr />
        <div className="footer__sitemap">
          {SiteMapData.map((links, idx) => (
            <ul key={idx}>
              {links.map((link, i) => (
                <li key={i}>
                  <a >{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div id="credit">
          <p>
            Challenge from Frontendmentor. Coded by{" "}
            <a
              href="https://www.frontendmentor.io/profile/mcktivity"
              target="_blank"
              rel="noreferrer noopener"
            >
              Mcklien
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
