import React from "react";
import "./Home.css";
import Product from "../../Components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          key="12321341"
          id="12321341"
          title="Lenovo IdeaPad 1 Laptop, 14.0 HD (1366 x 768) Display, Intel Celeron, 4GB/64 GB, Intel UHD Graphics 600, Windows 11, Ice Blue"
          price={285.62}
          rating={5}
          image="https://m.media-amazon.com/images/I/71hhgeQCrOL._AC_SL1500_.jpg"
        />
        <Product
          key="49538094"
          id="49538094"
          title="HP 15-inch Laptop, 11th Generation Intel Core i5-1135G7, Intel Iris Xe Graphics, 8 GB RAM, 256 GB SSD, Windows 11 Home (15-dy2024nr, Natural silver)"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/81I64Ptcd2L._AC_SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key="4903850"
          id="4903850"
          title="Fitbit Versa 2 Health and Fitness Smartwatch, Stone/Mist Grey, One Size (S and L)"
          price={199.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61JzeOC9rsL._AC_SL1500_.jpg"
        />
        <Product
          key="23445930"
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          key="3254354345"
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          key="90829332"
          id="90829332"
          title="LG 34WN80C-B UltraWide Monitor 34” 21:9 Curved WQHD (3440 x 1440) IPS Display, USB Type-C (60W PD) , sRGB 99% Color Gamut, 3-Side Virtually Borderless Design, Tilt/Height Adjustable Stand - Black"
          price={549.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
        />
        <Product
          key="90829232"
          id="90829232"
          title="ASUS ProArt Display PA279CV 27” 4K HDR UHD (3840 x 2160) Monitor, IPS, 100% sRGB/Rec. 709, ΔE < 2, USB-C DisplayPort HDMI USB hub, Calman Verified, Eye Care, Tilt Pivot Swivel Height Adjustable"
          price={482.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/81W71VaDIPL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
