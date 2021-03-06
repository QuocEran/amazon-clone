import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { projectAuth } from "../../Configs/firebase";
function Login() {
  const history = useHistory();

  const [processing, setProcessing] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    setProcessing(true);
    //Firebase login
    projectAuth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          setProcessing(false);
          history.push("/");
        }
      })
      .catch((error) => {
        setProcessing(false);
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign Up</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
            disabled={processing}
          >
            {processing ? <p>Processing...</p> : <p>Sign In</p>}
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </p>
      </div>

      <div className="register__container">
        <div className="divider">
          <h5>New to Amazon?</h5>
        </div>
        {processing ? (
          <div className="login__registerButton">
            Create your Amazon account
          </div>
        ) : (
          <Link to="/register" className="login__registerButton">
            Create your Amazon account
          </Link>
        )}
      </div>

      <div className="login__footer__container">
        <div className="login__footer__cover"></div>
        <div className="login__footer__link">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Conditions of Use</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Privacy Notice</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Help</a>
        </div>
        <div>
          <span>?? 1996-2022, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
