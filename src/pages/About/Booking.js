import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./Booking.css";
const Booking = () => {
  return (
    <div>
      <div>
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
            <NavLink className="user"  to="/serch" exact>
            <button style={{marginLeft:"20px",width:"150px"}} type="button" class="btn btn-secondary">Serch</button>
            </NavLink>
            <NavLink className="nav-link" class="user" to="/booking" exact>
            <Button className="button-clear">Clear</Button>
            </NavLink>
          </>
        </div>
      </div>

      <div className="TableBook">
        <table class="table">
          <thead className="bg-light">
            <tr>
              <th scope="col">SERVICE</th>
              <th scope="col">SHIP ID</th>
              <th scope="col">COUNTRY</th>
              <th scope="col">PORT OF SHIPMENT</th>
              <th scope="col">PORT OF DESTINATION</th>
              <th scope="col">TRANSIT TIME</th>
              <th scope="col">STATUS</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="row1">
                <div className="d-flex align-item-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Evergreen_Roundel.svg/1200px-Evergreen_Roundel.svg.png"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: 50 / 2,
                    }}
                  ></img>
                  <div className="nameSer1">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "30px", marginTop: "8px" }}
                    >
                      {" "}
                      EVERGREEN
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  EVG_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <NavLink
                  className="nav-link"
                  class="user"
                  to="/detail"
                  exact
                >
                  <button type="button" class="btn btn-success">
                    Select
                  </button>
                </NavLink>
              </td>
            </tr>
            <tr>
              <th scope="row2">
                <div className="d-flex align-item-center">
                  <img
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062012/maersk.jpg?itok=uYKEd5j9"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  ></img>
                  <div className="nameSer2">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "40px", marginTop: "8px" }}
                    >
                      MAERSK
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  MAR_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Select
                </button>
              </td>
            </tr>
            <tr>
              <th className="row3">
                <div className="d-flex align-item-center">
                  <img
                    src="https://seekvectorlogo.com/wp-content/uploads/2018/05/ocean-network-express-one-vector-logo-small.png"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: 50 / 2,
                    }}
                  ></img>
                  <div className="nameSer1">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "50px", marginTop: "8px" }}
                    >
                      ONE
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  ONE_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Select
                </button>
              </td>
            </tr>
            <tr>
              <th className="row4">
                <div className="d-flex align-item-center">
                  <img
                    src="https://www.cma-cgm.com/static/TH/pictures/CMA%20CGM%2012.png"
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: 50 / 2,
                    }}
                  ></img>
                  <div className="nameSer1">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "30px", marginTop: "8px" }}
                    >
                      {" "}
                      CMA-CGM
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  CMA_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Available
                </p>
              </td>
              <td>
                <button type="button" class="btn btn-success">
                  Select
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row5">
                <div className="d-flex align-item-center">
                  <img
                    src="https://companiesmarketcap.com/img/company-logos/512/601919.SS.png"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  ></img>
                  <div className="nameSer3">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "40px", marginTop: "8px" }}
                    >
                      COSCO
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  COS_0001
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Unavailable
                </p>
              </td>
              <td>
               
              </td>
            </tr>
            <tr>
              <th scope="row6">
                <div className="d-flex align-item-center">
                  <img
                    src="https://companiesmarketcap.com/img/company-logos/512/601919.SS.png"
                    alt=""
                    style={{ width: "40px", height: "40px" }}
                  ></img>
                  <div className="nameSer3">
                    <p
                      className="fw-bold mb-1"
                      style={{ marginLeft: "40px", marginTop: "8px" }}
                    >
                      COSCO
                    </p>
                  </div>
                </div>
              </th>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  COS_0002
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  THAILAND
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  BANGKOK PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  LAEM CHABANG PORT
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  7DAYS
                </p>
              </td>
              <td>
                <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                  Unavailable
                </p>
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Booking;
