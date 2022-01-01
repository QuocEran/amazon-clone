import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../Store/reducer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CheckoutProduct from "../../Components/CheckoutProduct";
import { useStateValue } from "../../Store/StateProvider";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispacth] = useStateValue();

  const stripe = useStripe();
  const element = useElements();

  // use some state for handleChange events
  const [error, setError] = useState();
  const [disable, setDisable] = useStateValue();

  // state for button in CurrencyFormat
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {};

  const handleChange = (event) => {
    // Listen for changes in the CardElement property
    // display any errors as the customer types their card payment__details
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout" className="checkout__link">
            {basket?.length} items
          </Link>
          )
        </h1>
        {/* <PaymentSection /> - delivery addr */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>2.27 CC6, Xo Viet Nghe Tinh</p>
            <p>Binh Thanh, TP.HCM</p>
          </div>
        </div>
        {/* <PaymentSection /> - item */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* <PaymentSection /> - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe payment details */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Error */}
              {error && <div className="payment__error ">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
