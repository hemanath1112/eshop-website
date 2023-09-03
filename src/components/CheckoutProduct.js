import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="cherckoutProduct">
      <div className="checkoutProduct__info">
        <img
          src="https://cdn.luxepolis.com/media/catalog/product/cache/1/image/730x/bd67507569056040e1a66324a68684a0/f/0/f01d17b4297dbbf0b33f72bedab9baad.jpg"
          alt=""
          className="chechoutProduct__image"
        />
      </div>
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">
          Gender : Women | Color : N/A | Size : UNI | Material : N/A | Product
          Condition : NEW WITH TAG | Price View : As Low as | brand : Burberry |
        </p>
        <p className="ckeckoutProduct__price">
          <strong> $20</strong>
        </p>
        <div className="checkoutProduct__rating">
          <p>⭐⭐⭐⭐</p>
        </div>

        <button>Remove the Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
