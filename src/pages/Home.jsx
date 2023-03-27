import React from "react";
import "./css/index.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div>
          <video
            src="src\pages\images\y2mate.com - Prime Midnight FanMade ad_1080p.mp4"
            autoPlay
            muted
          ></video>
        </div>

        <hr />
        <div>
          <h1 className="prod1">Our Featured Products</h1>
        </div>

        <hr />
        <br />
        <br />
        <div className="products">
          <div className="card">
            {" "}
            <img
              className="featured"
              src="src\pages\images\Football-Orange-PNG.png"
            />
            <h2 className="card-title">Nike FootBall</h2>
          </div>
          <div className="card">
            <img
              className="featured"
              src="src\pages\images\Bat_Elevar.png"
            />
           <h2 className="card-title">Elevar Bat</h2>
          </div>
          <div className="card">
            <img
              className="featured"
              src="src\pages\images\Bat_red.png"
            />
            <h2 className="card-title">WoodWork Bat</h2>
          </div>
          <div className="card">
            <img className="featured" src="src\pages\images\Racket.png" />
            <h2 className="card-title">Racket</h2>
          </div>
          
        </div>
        <div className="products">
          <div className="card">
            {" "}
            <img
              className="featured"
              src="src\pages\images\Bat_BG.png"
            />
            <h2 className="card-title">Wild Fire Bat</h2>
          </div>
          <div className="card">
            <img
              className="featured"
              src="src\pages\images\Shoes_pair.png"
            />
            <h2 className="card-title">Wild Fire Bat</h2>
          </div>
          <div className="card">
            <img
              id="coscoBall"
              className="featured"
              src="src\pages\images\Football-BWAdidas.png"
            />
            <h2 className="card-cosco-title">Wild Fire Bat</h2>
          </div>
          <div className="card">
            <img className="featured" src="src\pages\images\football-adidas.png" />
            <h2 className="card-title">Wild Fire Bat</h2>
          </div>
          
        </div>
      </div>
      <div className="">

      </div>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Yonex</h1>

          <h2>Contact</h2>

          <address>
            5534 India. Earth 22193-10212
            <br />
            <a className="footer__btn" href="mailto:dhruvparmar3840@@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>

            <ul className="nav__ul">
              <li>
                <span></span>
                <a href="https://Instagram.com">Instagram</a>
              </li>

              <li>
                <a href="https://Twitter.com">Twitter</a>
              </li>

              <li>
                <a href="https://Facebook.com">Facebook</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Products</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Clothes</a>
              </li>

              <li>
                <a href="#">Sports Gear</a>
              </li>

              <li>
                <a href="#">Equipment</a>
              </li>

              <li>
                <a href="#">New Merch</a>
              </li>

              <li>
                <a href="#">Glory</a>
              </li>

              <li>
                <a href="#">Tracker</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2019. All rights reserved.</p>

          <div className="legal__links">
            <a href="/">Yenox</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
