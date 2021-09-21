import React from "react";
import "./css/login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="contact">
              <form action="" style={{ textAlign: "center" }}>
                <h3>SIGN IN</h3>
                <input type="text" placeholder="USERNAME" />
                <input type="password" placeholder="PASSWORD" />
                <button class="submit">LET'S GO</button>
                <p style={{ color: "black" }}>
                  Don't have an account yet? <Link to="/signup">Register</Link>
                </p>
              </form>
            </div>
          </div>
          <div class="right">
            <div class="right-text">
              <h2>LONYX</h2>
              <h5>A CAR RENTAL AGENCEY</h5>
            </div>
            <div class="right-inductor">
              <img
                src="https://s3-us-west-2.amazonaws.com/lonyx-assets/lonyx-logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
