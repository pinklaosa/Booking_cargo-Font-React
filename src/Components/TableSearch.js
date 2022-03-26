import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { useParams } from "react-router-dom";

const TableSearch = (props) => {
  const { ship, destination, date } = props;
  const [serviceData, setServiceData] = useState([]);
  // console.log(ship , country , shipment, destination);
  const reformatDate = (datetime) =>
    datetime.getFullYear() +
    "-" +
    (datetime.getMonth() + 1) +
    "-" +
    datetime.getDate();

  useEffect(() => {
    Axios.post("http://localhost:3001/service", {
      ship: ship.toLowerCase(),
      destination: destination.toLowerCase(),
      date: reformatDate(new Date(date)),
    }).then((response) => {
      if (response.data.status === 200) {
        setServiceData(response.data.result);
        console.log(response.data.result);
      }
    });
  }, [ship, destination, date]);

  return (
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
            <th scope="col">DATE</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.length > 0 ? (
            serviceData.map((data) => (
              <tr>
                <th className="row1">
                  <div className="d-flex align-item-center">
                    <img
                      src={"/logo_service/logo_service/"+data.serviceName+".png"}
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
                        {data.serviceName.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </th>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {data.shipId.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {data.country.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {data.portShipment.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {data.portDestination.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {data.transactionTime.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {data.status.toUpperCase()}
                  </p>
                </td>
                <td>
                  <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                    {reformatDate(new Date(data.date))}
                  </p>
                </td>
                <td>
                  <NavLink
                    className="nav-link"
                    class="user"
                    to={`/booking/${data.id}`}
                    exact
                  >
                    <button type="button" class="btn btn-success">
                      Select
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))
          ) : (
            <div></div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableSearch;
