import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import Carousel from "react-bootstrap/Carousel";
import ctn20 from "./ctn20.png";
import ctn40 from "./ctn40.png";
import ctn45 from "./ctn45.png";
import { NavLink, useParams } from "react-router-dom";
import "./Detail.css";

//
import { useState, useEffect } from "react";
import axios from "axios";

function Detail() {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);
  const [serviceSelected, setServiceSelected] = useState([]);
  const [typeContainer, setTypeContainer] = useState("");
  const [time,setTime] = useState();

  let { id } = useParams();
  const reformatDate = (datetime) =>
    datetime.getFullYear() +
    "-" +
    (datetime.getMonth() + 1) +
    "-" +
    datetime.getDate();

  useEffect(() => {
    axios
      .post("http://localhost:3001/booking", {
        id: id,
      })
      .then((response) => {
        if (response.data.status === 200) {
          setServiceSelected(response.data.result);
        }
      });
  }, [id]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
    const token = localStorage.getItem("token");
    axios
      .create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .post("http://localhost:3001/bookingorder", {
        container: formFields,
        type: typeContainer,
        serviceId: id,
        time:time,
      })
      .then((response) => {
        if (response.data.status === 200) {
          alert(response.data.msg);
          window.location = "/history";
        } else {
          alert("Something went wrong!");
        }
      });
  };

  const addFields = () => {
    if (formFields.length < 3) {
      let object = {
        name: "",
        age: "",
      };
      setFormFields([...formFields, object]);
    }
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="containerdetail">
      <div className="TextBoxAll">
        <div className="label">Booking Details</div>
        <div className="TableDetail">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SERVICE</th>
                <th scope="col">SHIP ID</th>
                <th scope="col">COUNTRY</th>
                <th scope="col">PORT OF SHIPMENT</th>
                <th scope="col">PORT OF DESTINATION</th>
                <th scope="col">TRANSIT TIME</th>
                <th scope="col">DATE</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {serviceSelected.length > 0 ? (
                <tr>
                  <th className="row1">
                    <div className="d-flex align-item-center">
                      <img
                        src={"/logo_service/logo_service/"+serviceSelected[0].serviceName+".png"}
                        alt=""
                        style={{
                          marginLeft: 15,
                          width: "40px",
                          height: "40px",
                          borderRadius: 50 / 2,
                        }}
                      ></img>
                      <div className="nameSer1">
                        <p
                          className="fw-bold mb-1"
                          style={{ marginLeft: "80px", marginTop: "8px" }}
                        >
                          {serviceSelected[0].serviceName.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {serviceSelected[0].shipId.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {serviceSelected[0].country.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {serviceSelected[0].portShipment.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {serviceSelected[0].portDestination.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {serviceSelected[0].transactionTime.toUpperCase()}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {reformatDate(new Date(serviceSelected[0].date))}
                    </p>
                  </td>
                  <td>
                    <p className="fw-bold mb-1" style={{ marginTop: "8px" }}>
                      {serviceSelected[0].status.toUpperCase()}
                    </p>
                  </td>
                  <td></td>
                </tr>
              ) : (
                <div></div>
              )}
            </tbody>
          </table>
        </div>
        <div className="Bodydetail">
          <div class="textQuantity">
            <label
              for="ex3"
              className="fw-bold mb-1"
              style={{ marginLeft: "20px" }}
            >
              Container Type
            </label>
            <select
              style={{ width: "420px" }}
              class="form-select"
              onChange={(e) => setTypeContainer(e.target.value)}
            >
              <option selected>Select Container</option>
              <option>Dry Container</option>
              <option>Open Top Container</option>
              <option>Reefer Container</option>
            </select>
            <hr style={{ height: "3px" }} />
            <div className="addfild">
              <form>
                {formFields.map((form, index) => {
                  return (
                    <div key={index}>
                      <label
                        for="ex3"
                        className="fw-bold mb-1"
                        style={{ marginLeft: "20px" }}
                      >
                        Container Size
                      </label>
                      <br />
                      <select
                        style={{ width: "420px" }}
                        class="form-select"
                        name="age"
                        placeholder="Age"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.age}
                      >
                        <option selected>Container Size</option>
                        <option value="20">20" FT Price 2500 THB</option>
                        <option value="40">40" FT Price 4500 THB</option>
                        <option value="45">45" FT Price 6000 THB</option>
                      </select>

                      <label
                        for="ex3"
                        className="fw-bold mb-1"
                        style={{ marginLeft: "20px" }}
                      >
                        
                        Container Quantity
                      </label>
                      <input
                        style={{
                          height: "38px",
                          width: "420px",
                          marginLeft: "20px",
                          border: "3px solid gray",
                          marginTop: "15px",
                        }}
                        type="number"
                        class="form-control"
                        name="name"
                        placeholder="Container Quantity"
                        onChange={(event) => handleFormChange(event, index)}
                        value={form.name}
                      />
                      <button
                        style={{ marginLeft: "20px", marginTop: "15px" }}
                        class="btn btn-secondary"
                        onClick={() => removeFields(index)}
                      >
                        Remove
                      </button>
                      <hr style={{ height: "3px" }} />
                    </div>
                  );
                })}
              </form>
            </div>

            <button
              style={{ marginLeft: "20px", width: "90px" }}
              class="btn btn-success"
              onClick={addFields}
            >
              Add
            </button>

            <label
              for="ex3"
              className="fw-bold mb-1"
              style={{ marginTop: "20px", marginLeft: "20px" }}
            >
              transaction time
            </label>
            <input
              class="form-control"
              style={{
                width: "420px",
                marginLeft: "20px",
                border: "3px solid gray",
                marginTop: "15px",
              }}
              id="ex3"
              type="time"
              onChange={(e) => setTime(e.target.value)}
            />
            <div className="buttonDetail">
              <button
                type="button"
                style={{
                  marginTop: "30px",
                  width: "150px",
                  marginLeft: "65px",
                }}
                class="btn btn-success"
                // data-toggle="modal"
                // data-target="#exampleModalCenter"
                onClick={submit}
              >
                Confirm
              </button>

              <NavLink className="nav-link" class="user" to="/booking" exact>
                <button
                  type="button"
                  class="btn btn-secondary"
                  style={{
                    marginTop: "30px",
                    width: "150px",
                    marginLeft: "20px",
                  }}
                >
                  Cancel
                </button>
              </NavLink>
            </div>
          </div>
          <div className="imgDetail">
            <Carousel fade variant="dark">
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={ctn20}
                  alt="Second slide"
                  style={{ width: "450px", height: "450px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={ctn40}
                  alt="Second slide"
                  style={{ width: "450px", height: "450px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={ctn45}
                  alt="Third slide"
                  style={{ width: "450px", height: "450px" }}
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="modalcolor">
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header" style={{ backgroundColor: "#2e2e2e" }}>
                <h5
                  class="modal-title"
                  id="exampleModalLongTitle"
                  style={{
                    color: "white",
                    marginLeft: "10px",
                    fontSize: "17px",
                  }}
                >
                  You are sure of the booking details and proceed.
                </h5>

                <button
                  type="button"
                  class="btn-close btn-close-white"
                  aria-label="Close"
                  data-dismiss="modal"
                ></button>
              </div>
              <div class="modal-body">
                <p
                  style={{
                    width: "150px",
                    height: "150px",
                    textAlign: "center",
                    color: "green",
                  }}
                >
                  <img
                    style={{
                      marginTop: "10px",
                      width: "150px",
                      height: "150px",
                      marginLeft: "150px",
                    }}
                    src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
                    alt=""
                  ></img>
                </p>
              </div>
              <div class="modal-footer" style={{ backgroundColor: "#F5F5F5" }}>
                <NavLink className="nav-link" class="user" to="/history" exact>
                  <button
                    style={{ width: "90px" }}
                    type="button"
                    class="btn btn-success"
                  >
                    Confirm
                  </button>
                </NavLink>

                <button
                  style={{ marginRight: "155px", width: "90px" }}
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;
