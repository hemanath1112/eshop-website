import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header" >
      <Link to="/" style={{ TextDecoration:"none" }}>
      <div className="header__logo">
        <StorefrontIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemOne">Hello Guest</span>
          <span className="nav__itemTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemOne">Your</span>
          <span className="nav__itemTwo">Shop</span>
        </div>
        <Link to="/Checkout" style={{ TextDecoration:"none"}}>
          <div className="nav__item nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemTwo nav__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
