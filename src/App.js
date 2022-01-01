import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import { useEffect } from "react";
import { projectAuth } from "./Configs/firebase";
import { useStateValue } from "./Store/StateProvider";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//Config Stripe

const promise = loadStripe(
  "pk_test_51KD2V7JzrUp5irn8lNbJG0BOHGfUKWuqzO1pzHgTZQgjt3yQyHKNwhstgOex1o5GhPbC3rNwJU2pvBy2kOOFsYBR00ckBYFqFC"
);

// App jsx

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // WILL ONLY RUN ONCE WHEN THE COPONENT LOADS
    projectAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
