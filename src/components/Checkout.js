import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Chechkout.css";
import { useStateValue } from "./StateProvider";

function Checkout() {
const [{basket}, dispatch] = useStateValue();
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__add"
          />
          <div>
            <h2 className="checkout__title">Your Shoping Basket</h2>
            {basket.map(item=>(
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.imgage}
              price={item.price}
              rating = {item.rating}
              
              />
            ))}
            
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
