import React from "react";
import Product from "../components/Product"
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg"
            alt=""
            className="home__image"
          />
        </div>
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
