import React from "react";
import "./css/login.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <section class="login">
        <div class="login_box">
          <div class="left">
            <div class="contact">
              <form action="" style={{ textAlign: "center" }}>
                <h3>SIGN UP</h3>
                <input type="text" placeholder="FULLNAME" />
                <input type="text" placeholder="USERNAME" />
                <input type="email" placeholder="EMAIL" />
                <input type="password" placeholder="PASSWORD" />
                <button class="submit">LET'S GO</button>
                <p style={{ color: "black" }}>
                  Already have an account? <Link to="/login">Login</Link>
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
