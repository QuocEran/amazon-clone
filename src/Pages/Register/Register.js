import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { projectAuth } from "../../Configs/firebase";
function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [processing, setProcessing] = useState("");

  const register = async (e) => {
    e.preventDefault();
    setProcessing(true);
    //Firebase register
    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!response) throw new Error("Could not create a new user");
      await response.user.updateProfile({ displayName: name });
      setProcessing(false);
      history.push("/");
      return response;
    } catch (error) {
      setProcessing(false);
      alert(error.message);
    }
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
        <h1>Register</h1>
        <form action="">
          <h5>Your Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
        </form>

        <p>
          By continuing, you agree to Amazon's{" "}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
        </p>
        <button
          onClick={register}
          disabled={processing}
          className="login__signInButton"
        >
          {processing ? (
            <p>Processing...</p>
          ) : (
            <p> Create your Amazon account</p>
          )}
        </button>
      </div>

      <div className="register__container">
        {processing ? (
          <div className="login__registerButton">Back to Login In</div>
        ) : (
          <Link to="/login" className="login__registerButton">
            Back to Login In
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
        <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
  );
}

export default Register;
