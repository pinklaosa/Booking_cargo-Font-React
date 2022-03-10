import React from "react";
import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

import logo from './loginlogo.png';


const Login = () => {
  return (
    <div className="containerLogin">
      <div className="img">
        <p style={{ textAlign: "center" }}>
          <img
            style={{ width: "310px", marginTop: "10px" }}
            src={logo}
            alt=""
          ></img>
        </p>
        <h1 className="headLogin" style={{textAlign:"center",color:"gray"}}>LOGIN</h1>
      </div>
      <div style={{ width: "700px", marginLeft: "33%" }}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div style={{ marginTop: "40px", marginLeft:"200px"}}>
          <NavLink  to="/home" exact>
            <Button style={{width:"110px"}} outline variant="success" type="submit" >
              LOGIN
            </Button>
            </NavLink>
            <Button
              style={{ marginLeft: "20px", width: "110px" }}
              variant="secondary"
              type="submit"
            >
              REGISTER
            </Button>
          </div>
        </Form>
      </div>
      <footer>
        <div className="footer-content">
            <h3>Booking Cargo Ship </h3> 
            <p>It is a boat booking system that can help users book the desired transport boat.</p>
            <ul className="social">
            <p>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-solid fa-envelope"></i>
              <i class="fa-brands fa-line"></i>
              <i class="fa-solid fa-phone"></i>
            </p>
            </ul>
        </div>
      </footer>
    </div>
  );
};
export default Login;
