import React from "react";
import { useStateValue } from "../Store/StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ id, image, title, price, rating, key }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} alt="" />
      </div>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
