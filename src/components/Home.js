import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home home__container">
      <div className="shop__cover hidden"></div>
      <div className="home__landing-img-container">
        <img
          alt="shirts on rack"
          className="home__landing-img"
          src="./images/landing.jpg"
        ></img>
        <Link className="btn--shop-now" to="/shop">
          <h1 className="home__heading">onlinestore.</h1>
          SHOP NOW
        </Link>
      </div>
      <h1>Crisp, plain, classic.</h1>
      <div className="home__gallery-container">
        <img alt="man wearing shirt" src="./images/shirt3.jpg"></img>
        <img alt="man wearing shirt" src="./images/shirt1.jpg"></img>
        <img alt="man wearing shirt" src="./images/shirt2.jpg"></img>
        <img alt="man wearing shirt" src="./images/shirt4.jpg"></img>
      </div>
      <div className="home__cotton-img-container">
        <img
          alt=""
          className="home__cotton-img"
          src="./images/cottonsource.png"
        ></img>
        <img
          alt=""
          className="home__cotton-txt"
          src="/images/cottontxt.png"
        ></img>
      </div>
    </div>
  );
}

export default Home;
