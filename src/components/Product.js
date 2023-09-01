import React from 'react';
import "./Product.css";

function Product(props) {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p className='project__title'> {props.title}</p>
                <p className='product__price'>
                    <strong>${props.price}</strong></p>
                <div className="product__rating">
                {props.rating}
                
                </div>
                <img src={props.image} alt="" />
                <button className='product__button'>Add to Basket</button>
            </div>
        </div>
    </div>
  )
}

export default Product