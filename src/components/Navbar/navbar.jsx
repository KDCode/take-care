import React from "react";
import "./navbar.css";
import { useEffect } from "react";
import $ from "jquery";
// import "jquery-ui-dist";

const Navbar = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".mean-toggle").click(function () {
        $(".mean-toggle").toggleClass("active");
        $("nav").toggleClass("active");
      });
    });
  });

  return (
    <header id="header">
      <a href="#" class="logo">
        Take a Pill 💊
      </a>
      <div class="mean-toggle"></div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Blaa bla</a>
          </li>

          <li>
            <a className="started" href="#">
              Start here
            </a>
          </li>
        </ul>
      </nav>
      <div class="clear"></div>
    </header>
  );
};

export default Navbar;
