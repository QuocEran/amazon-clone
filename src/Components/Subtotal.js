import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Store/StateProvider";
import { getBasketTotal } from "../Store/reducer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Subtotal() {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispacth] = useStateValue();

  const handleAuth = () => {
    if (user) {
      history.push("/payment");
    } else {
      history.push("/login");
    }
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={handleAuth}>Proceed to Checkout</button>
    </div>
  );
}
export default Subtotal;
