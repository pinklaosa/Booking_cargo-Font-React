import React, { useState } from "react";
import Axios from "axios";
import "./Register.css";
import { NavLink,useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword,setConfpassword] = useState("");

  const registering = () => {
    Axios.post("http://localhost:3001/registed", {
      userId: email.replace(/[.,@\s]/g, ""),
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      password: password,
      confpassword: confpassword,
    }).then((response) => {
      if(response.data.status === 200){
        alert(response.data.msg);
        window.location = '/login';
      }else{
        alert(response.data.msg);
      }
    });
  };
  return (
    <div class="signup__container">
      <div class="container__child signup__thumbnail">
        <div class="thumbnail__logo"></div>
        <div class="thumbnail__content text-center">
          <h1 class="heading--primary" style={{ marginLeft: "60px" }}>
            Register
          </h1>

          <h4 style={{ marginLeft: "40px", marginTop: "40px" }}>
            Create your Account
          </h4>
        </div>
        <div class="thumbnail__links">
          <ul class="list-inline m-b-0 text-center"></ul>
        </div>
        <div class="signup__overlay"></div>
      </div>
      <div class="container__child signup__form">
        <div>
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input
              class="form-control"
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              class="form-control"
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              class="form-control"
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              class="form-control"
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              class="form-control"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="confirmpassword">Confirm Password</label>
            <input
              class="form-control"
              type="password"
              name="confirmpassword"
              id="passwordRepeat"
              onChange={(e)=> setConfpassword(e.target.value)}
              required
            />
          </div>
          <div class="buttonControl" style={{ marginTop: "20px" }}>
            <ul class="list-inline">
              <li>
                <button class="btn btn--form" onClick={registering}>
                  Register
                </button>
              </li>
            </ul>
            <ul class="list-inline">
              <NavLink to="/login" exact>
                <li>
                  <input class="btn btn--form1" type="submit" value="Login" />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
