import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Store/StateProvider";
import { projectAuth } from "../Configs/firebase";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      projectAuth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_PNG11"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__options">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__options">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Order</span>
          </div>
        </Link>

        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
