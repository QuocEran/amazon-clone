import React from "react";
import "./Footer.css";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer__spacer">
        <span></span>
      </div>
      <div className="footer__btnToTop">
        <button onClick={handleScrollToTop}>Back to top</button>
      </div>
      <div className="footer__main__content">
        <div className="footer__column col-2">
          <div>Get us to know</div>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
          </ul>
        </div>
        <div className="footer__column col-1"></div>
        <div className="footer__column col-2">
          <div>Make Money with Us</div>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Business</li>
            <li>Sell apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
          </ul>
        </div>
        <div className="footer__column col-1 mb-xs"></div>
        <div className="footer__column col-2">
          <div>Amazon Payment Products</div>
          <ul>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer__column col-1"></div>
        <div className="footer__column col-2">
          <div>Let Us Help You</div>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footer__sub__content">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_PNG11"
        />
        <div className="footer__sub__options">
          <div className="wrap__options">
            <p>🌐</p>
            <p>English</p>
          </div>
          <div className="wrap__options">
            <p>💲</p>
            <p>USD - U.S Dollar</p>
          </div>
          <div className="wrap__options">
            <p>🌍</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
