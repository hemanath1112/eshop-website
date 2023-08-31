import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon fontSize="large" className="header__logoImage" />
        <h2 className="header__logoTitle">eshop</h2>
      </div>
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
        <div className="nav__item nav__itemBasket">
          <ShoppingBasketIcon />
          <span className="nav__itemTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
