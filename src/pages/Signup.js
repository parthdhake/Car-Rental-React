import React from "react";
import "./css/auth.css";

export default function Signup() {
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Signup</h3>
        <label for="username">Full Name</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>
        <label for="username">Email</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
}
