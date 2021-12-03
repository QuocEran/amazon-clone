import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon_PNG11"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <div className="header__options">
          <span className="header__optionsLineOne">Hello Guest</span>
          <span className="header__optionsLineTwo">Sign In</span>
        </div>
        <div className="header__options">
          <span className="header__optionsLineOne">Returns</span>
          <span className="header__optionsLineTwo">& Order</span>
        </div>
        <div className="header__options">
          <span className="header__optionsLineOne">Your</span>
          <span className="header__optionsLineTwo">Prime</span>
        </div>
        <div className="header__options"></div>
      </div>
    </div>
  );
}

export default Header;
