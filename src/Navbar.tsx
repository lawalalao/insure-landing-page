import React, { useState } from "react";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Menu } from "./images/icon-hamburger.svg";
import { ReactComponent as Close } from "./images/icon-close.svg";
import Button from "./shared/Button";

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  function toggleMenu() {
    setOpen(!open);
    let menu = document.getElementById("nav-menu");
    let button = document.getElementById("nav-button");
    if (menu?.classList.contains("active")) {
      menu.classList.remove("active");
      button?.classList.replace("button--large", "button--normal");
      button?.classList.replace("button--white", "button--violet");
    } else {
      menu?.classList.add("active");
      button?.classList.replace("button--normal", "button--large");
      button?.classList.replace("button--violet", "button--white");
    }
  }
  return (
    <div className="nav__wrapper">
      <nav className="nav" aria-label="nav">
        <Logo className="nav__logo" aria-label="insure-logo" />
        {!open ? (
          <Menu className="nav__menu-icon" onClick={toggleMenu} />
        ) : (
          <Close className="nav__menu-icon" onClick={toggleMenu} />
        )}
        <div className="nav__menu" id="nav-menu">
          <a className="nav__link" aria-label="how we work" href="">
            how we work
          </a>
          <a className="nav__link" aria-label="blog" href="">
            blog
          </a>
          <a className="nav__link" aria-label="account" href="">
            account
          </a>
          <Button
            id="nav-button"
            className="button button--normal button--violet"
            label="view plans"
          />
        </div>
      </nav>
    </div>
  );
};
