import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "./NotFound.svg";
import "./NotFound.css";
function NotFound() {
  return (
    <div className="not__found">
      <img src={NotFoundImg} alt="NotFound" className="not__found__img" />
      <div className="not__found__content">
        <h2>Sorry</h2>
        <p>That page can't be found.</p>
      </div>
      <Link className="not__found__link" to="/">
        Back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
