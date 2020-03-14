import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  handleClick = () => {
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelectorAll(".nav-links li");
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
          0.5}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  };

  render() {
    return (
      <nav className="navbar-top">
        <div className="nav-title">
          <Link className="nav-title" to="/">
            <h1 className="navbar-h1">株式会社長尾レッカー</h1>
          </Link>
          <div className="nav-tel">
            {/* <p className="navbar-text">お気軽にお問い合わせください</p>
            <p className="navbar-text">TEL: 0537-86-6410</p> */}
            <p>お気軽にお問い合わせください</p>
            <p>TEL: 0537-86-6410</p>
          </div>
        </div>
        <div className="navbar-menu">
          <ul className="nav-links">
            <li>
              <a href="/">ホーム</a>
            </li>
            <li>
              <a href="/company">会社概要</a>
            </li>
            <li>
              <a href="/lineup">保有機種</a>
            </li>
            <li>
              <a href="/business-guide">事業内容</a>
            </li>
            <li>
              <a href="/recruit">採用情報</a>
            </li>
            <li>
              <a href="/contact">お問い合わせ</a>
            </li>
          </ul>
          <div
            className="burger"
            onClick={() => {
              this.handleClick();
            }}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
