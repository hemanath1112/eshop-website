import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg"
            alt=""
            className="home__image"
          />
        </div>
        <div className="home__row">
          <Product
            id="12133"
            title="Gender : Women | Color : N/A | Size : UNI | Material : N/A | Product Condition : NEW WITH TAG | Price View : As Low as | brand : Burberry |"
            price={12.5}
            rating="⭐⭐⭐⭐⭐"
            image="https://cdn.luxepolis.com/media/catalog/product/cache/1/image/730x/bd67507569056040e1a66324a68684a0/f/0/f01d17b4297dbbf0b33f72bedab9baad.jpg"
          />
          <Product
            id="12133"
            title="Featured Product : N/A | Gender : Men | Color : N/A | Size : N/A | Material : 10% Acrylic 90% Polyamide (Nylon); Lining: 35% Cotton 65% Polyester | Product Condition : NEW WITH TAG |"
            price={15}
            rating="⭐⭐⭐⭐"
            image="https://cdn.luxepolis.com/media/catalog/product/cache/1/image/730x/bd67507569056040e1a66324a68684a0/i/n/inttsb843333370-of-843333370-3.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12133"
            title="Gucci GG Supreme Large Messenger Bag
           W27cm x H28.5cm x D5cm Gender : Men | Product Condition : NEW WITH TAG | Price View : As Low as | brand : Gucci |"
            price={20}
            rating="⭐⭐⭐⭐⭐"
            image="https://cdn.luxepolis.com/media/catalog/product/cache/1/image/730x/bd67507569056040e1a66324a68684a0/w/h/whatsapp_image_2020-07-21_at_3.00.23_pm_1_.jpeg"
          />
          <Product
            id="12135"
            title="Featured Product : N/A | Gender : Women | Color : N/A | Size : N/A | Material : 100% Bovine Leather | Product Condition : NEW WITH TAG |"
            price={18}
            rating="⭐⭐⭐⭐"
            image="https://cdn.luxepolis.com/media/catalog/product/cache/1/image/730x/bd67507569056040e1a66324a68684a0/i/n/inttsb849487063-em-849487063-2.jpg"
          />
          <Product
            id="12153"
            title="Featured Product : N/A | Gender : Men | Color : N/A | Size : N/A | Material : 10% Acrylic 90% Polyamide (Nylon); Lining: 35% Cotton 65% Polyester | Product Condition : NEW WITH TAG |"
            price={16}
            rating="⭐⭐⭐⭐⭐"
            image="https://i.ebayimg.com/images/g/BQ0AAOSw08NkY8WF/s-l1600.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1215"
            title="Featured Product :Rare Burberry Shoulder Bag Leather Crossbody Nova Check Black| Material : 10% Acrylic 90% Polyamide (Nylon); Lining: 35% Cotton 65% Polyester | Product Condition : NEW WITH TAG |"
            price={65}
            rating="⭐⭐⭐⭐⭐"
            image="https://i.ebayimg.com/images/g/-MIAAOSwN29k2BE~/s-l1600.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
