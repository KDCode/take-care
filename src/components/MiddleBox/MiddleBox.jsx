import React from "react";
import "./MiddleBox.css";
import bg from "../MiddleBox/bg2.jpg";
const MiddleBox = () => {
  return (
    <div>
      <div class="hero">
        <div class="hero__text-block" data-aos="zoom-out-left">
          {/* <div class="house-emoji">👨‍⚕️</div> */}
          <h1> 👨‍⚕️ Check yourself first !</h1>
          <div class="main_div">
            {/* <!-- <div class="title">Login</div> --> */}

            <form action="#">
              <div class="input_box">
                <input type="text" placeholder="Email or Phone" required />
                <div class="icon">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <div class="input_box">
                <input type="password" placeholder="Password" required />
                <div class="icon">
                  <i class="fas fa-lock"></i>
                </div>
              </div>
              <div class="option_div">
                <div class="check_box">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div class="forget_div">
                  <a href="#">Forgot password?</a>
                </div>
              </div>
              <div class="input_box button">
                <input type="submit" value="Login" />
              </div>
              <div class="sign_up">
                Not a member? <a href="signup.html">Login here</a>
              </div>
            </form>
            {/* <div class="social_icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i> <span>Facebook</span>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
              </a>
            </div> */}
          </div>
        </div>
        <div class="hero__image-block" data-aos="zoom-in-left">
          <img src={bg} width="100" height="50" />
        </div>
      </div>
    </div>
  );
};

export default MiddleBox;
