import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./About.css";

const About = () => {
  return (
    <div className="select">
      <header className="app-Header">Please Select Menu</header>

      <select class="form-select">
        <option selected>Select Ship</option>
        <option value="1">All</option>
        <option value="1">EVERGREEN</option>
        <option value="2">MAERSK</option>
        <option value="3">ONE</option>
        <option value="3">CMA-CGM</option>
        <option value="3">COSCO</option>

      </select>

      <select class="form-select">
        <option selected>Select Country</option>
        <option value="1">Thailand</option>
        <option value="2">Singapore</option>
        <option value="3">Malaysia</option>
      </select>

      <select class="form-select">
        <option selected>Port of Shipment</option>
        <option value="1">Bangkok Port</option>
        <option value="2">Laem Chabang Port</option>
        <option value="3">Chiang Sean Port</option>
        <option value="4">Chiang Khong Port</option>
        <option value="4">Ranong Port</option>
      </select>

      <select class="form-select">
        <option selected>Port of Destination</option>
        <option value="1">Bangkok Port</option>
        <option value="2">Laem Chabang Port</option>
        <option value="3">Chiang Sean Port</option>
        <option value="4">Chiang Khong Port</option>
        <option value="4">Ranong Port</option>
      </select>

      <input type="date" id="calender" class="form-select" />

      <div id="calenderSelect" class="form-text" style={{marginLeft:"480px"}}>
        please select DTAE / MONT / YEAR
      </div>

      <>
        <br />
        <NavLink className="nav-link" class="user" to="/serch" exact>
        <button style={{marginLeft:"20px",width:"150px"}} type="button" class="btn btn-secondary">Serch</button>
        </NavLink>

        <Button style={{borderColor:"gray"}} className="button-clear">Clear</Button>
      </>

      
    </div>
  );
};
export default About;
