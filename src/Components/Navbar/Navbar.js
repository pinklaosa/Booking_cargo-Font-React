import React, { useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import Axios from "axios";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });

    const token = localStorage.getItem("token");
    let axiosJWT = Axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    axiosJWT.post("http://localhost:3001/authen").then((response) => {
      // console.log(response.data);
      if (response.data.status !== 200) {
        localStorage.removeItem("token");
        window.location = "/login";
      }
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <i class="fa-solid fa-ship"></i>Booking Cargo Ship
      </NavLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/home" exact>
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/booking" exact>
              <i className="far fa-address-book"></i>Booking
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/history" exact>
              <i class="fa-solid fa-clock-rotate-left"></i>History
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" class="user" to="/contact" exact>
              <i class="fa-solid fa-circle-question"></i>Help
            </NavLink>
          </li>
          <li className="nav-item1">
            <NavLink className="nav-link" class="user" to="/user" exact>
              <i class="fa-solid fa-user"></i>User
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="btn-log">
        <NavLink to="/login" exact>
          <button className="btn-log1" onClick={logout}>
            <i
              className="btn-logout"
              class="fa-solid fa-arrow-right-from-bracket"
            ></i>
            Logout
          </button>
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
