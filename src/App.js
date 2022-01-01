import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import { useEffect } from "react";
import { projectAuth } from "./Configs/firebase";
import { useStateValue } from "./Store/StateProvider";
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
