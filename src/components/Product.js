import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p className='project__title'>  consectetur ad deserunt recusandae, maxime aspernatur a commodi.Enim dolorum exercitationem consectetur? Sapiente sit necessitatibus magnam quam libero corporis, officia illo itaque!</p>
                <p className='product__price'>
                    <strong>$30</strong></p>
                <div className="product__rating">
                ⭐⭐⭐⭐
                </div>
                <img src="https://images.dailyobjects.com/marche/assets/images/other/bags-and-wallets-1s.png?tr=cm-pad_resize,v-2,dpr-2,q-60" alt="" />
                <button className='product__button'>Add to Basket</button>
            </div>
        </div>
    </div>
  )
}

export default Product