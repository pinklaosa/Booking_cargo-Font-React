import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import TableSearch from "../../Components/TableSearch";
import "./Booking.css";
const Booking = () => {
  const [tableShow, setTableShow] = useState(false);
  const [ship, setShip] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {
    console.log(ship);
    console.log(destination);
  };

  return (
    <div>
      <div>
        <div className="select">
          <header className="app-Header">Please Select Menu</header>

          <select class="form-select" onChange={(e) => setShip(e.target.value)}>
            <option selected>Select Ship</option>
            <option value="">All</option>
            <option>EVERGREEN</option>
            <option>MAERSK</option>
            <option>ONE</option>
            <option>CMA-CGM</option>
            <option>COSCO</option>
          </select>

          {/* <select
            class="form-select"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option selected>Select Country</option>
            <option>Thailand</option>
          </select>

          <select
            class="form-select"
            onChange={(e) => setShipment(e.target.value)}
          >
            <option selected>Port of Shipment</option>
            <option>Bangkok Port</option>
          </select> */}

          <select
            class="form-select"
            onChange={(e) => setDestination(e.target.value)}
          >
            <option selected>Port of Destination</option>
            <option value="">All</option>
            <option>Bangkok Port</option>
            <option>Laem Chabang Port</option>
            <option>Chiang Sean Port</option>
            <option>Chiang Khong Port</option>
            <option>Ranong Port</option>
          </select>

          <input
            type="date"
            id="calender"
            class="form-select"
            onChange={(e) => setDate(e.target.value)}
          />

          <>
            <br />
            {/* <button
              style={{ marginLeft: "20px", width: "150px" }}
              type="button"
              class="btn btn-secondary"
              onClick={() => {
                setTableShow(true);
              }}
            >
              Serch
            </button> */}
            {/* <NavLink className="nav-link" class="user" to="/booking" exact>
              <Button className="button-clear">Clear</Button>
            </NavLink> */}
          </>
        </div>
      </div>
      <TableSearch ship={ship} destination={destination} date={date}></TableSearch>
    </div>
  );
};
export default Booking;
