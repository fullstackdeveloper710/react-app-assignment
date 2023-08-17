import React, { useState } from "react";
import "../assets/scss/header.scss";
import { Container } from "react-bootstrap-v5";
import { Link } from "react-router-dom";
import menuIcon from "../assets/images/menu.png";
const Menu = () => {
  const [isHiddenMenu, setIsHiddenMenu] = useState(true);
  return (
    <div className="header">
      <Container>
        <div className="header__inner">
          <Link to="/" className="header__logo">
            Logo
          </Link>

          <nav
            className="header__nav"
            style={{ display: isHiddenMenu ? "block" : "none" }}
          >
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => setIsHiddenMenu(!isHiddenMenu)}
            className="toggleBtn"
          >
            <img src={menuIcon} height={20} width={20} />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
