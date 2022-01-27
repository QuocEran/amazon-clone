import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useEffect } from "react";
import { projectAuth } from "./Configs/firebase";
import { useStateValue } from "./Store/StateProvider";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Pages/Orders/Orders";

//Config Stripe

const promise = loadStripe(
  "pk_test_51KD2V7JzrUp5irn8lNbJG0BOHGfUKWuqzO1pzHgTZQgjt3yQyHKNwhstgOex1o5GhPbC3rNwJU2pvBy2kOOFsYBR00ckBYFqFC"
);

// App jsx

function App() {
  const [{ user }, dispatch] = useStateValue();
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
  }, [user, dispatch]);

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="*">
            <Header />
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
