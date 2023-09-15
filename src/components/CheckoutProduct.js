import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({id,title, image, price, rating}) {
  return (
    <div className="cherckoutProduct">
      <div className="checkoutProduct__info">
        <img
          src={image}
          alt=""
          className="chechoutProduct__image"
        />
      </div>
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">
        {title}
        </p>
        <p className="ckeckoutProduct__price">
          <strong> ${price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>{rating}</p>
        </div>

        <button>Remove the Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
