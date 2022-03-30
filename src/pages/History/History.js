import React, { useEffect, useState } from "react";
import "./History.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Popup from "reactjs-popup";

const Services = () => {
  const [history, setHistory] = useState([]);
  const [img, setIMG] = useState([]);
  const [getImg, setGetIMG] = useState();

  const reformatDate = (datetime) =>
    datetime.getFullYear() +
    "-" +
    (datetime.getMonth() + 1) +
    "-" +
    datetime.getDate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    let i = 0;
    axios
      .create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .get("http://localhost:3001/history")
      .then((response) => {
        if (response.data.status === 200) {
          setHistory(response.data.result);
          // console.log(response.data.result);
        }
      });
  }, []);
  const Input = styled("input")({
    display: "none",
  });
  var formatter = new Intl.NumberFormat({
    style: "currency",
    currency: "THB",
  });

  const chageColor = (status) => {
    switch (status) {
      case "paid":
        return "blue";
      case "waiting payment":
        return "yellow";
      case "complete":
        return "green";
      case "canceled":
        return "red";
        case "pending":
          return "orange";
      default:
        break;
    }
  };

  return (
    <div className="containerhelp">
      <div className="headHistory">
        <label style={{ marginLeft: "40px", fontSize: "30px" }}>History</label>
      </div>

      <div className="tableHistory">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style={{ marginLeft: "50px" }}>
                ORDER ID
              </th>
              <th scope="col">DATE</th>
              <th scope="col">TIME</th>
              <th scope="col">STATUS</th>
              <th scope="col">PRICE</th>
              <th scope="col">ORDER DETAIL</th>
              <th scope="col">PAYMENT</th>
              <th scope="col">IMG PREVIEW</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((h, i) => {
                let colorStatus = chageColor(h.bookingStatus);
                return (
                  <tr>
                    <th>
                      <p style={{ marginTop: "10px" }}>{h.bookingId}</p>
                    </th>
                    <td>
                      <p style={{ marginTop: "10px" }}>
                        {reformatDate(new Date(h.date))}
                      </p>
                    </td>
                    <td>
                      <p style={{ marginTop: "10px" }}>{h.time}</p>
                    </td>
                    <td>
                      <p style={{ marginTop: "10px", color: colorStatus }}>
                        {h.bookingStatus.toUpperCase()}
                      </p>
                    </td>
                    <td>
                      <p style={{ marginTop: "10px" }}>
                        {formatter.format(h.price)} THB
                      </p>
                    </td>
                    <td>
                      <p style={{ marginTop: "6px" }}>
                        <a
                          class="btn btn-secondary"
                          style={{ width: "80px" }}
                          data-toggle="collapse"
                          href={`#multiCollapseExample${i}`}
                          role="button"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1"
                        >
                          View
                        </a>
                      </p>
                      <div class="row">
                        <div class="col" style={{ width: "250px" }}>
                          <div
                            class="collapse multi-collapse"
                            id={`multiCollapseExample${i}`}
                          >
                            <div
                              class="card card-body"
                              style={{
                                border: "1px solid gray",
                                borderRadius: "15px",
                                textAlign: "left",
                              }}
                            >
                              Service ship : {h.serviceName.toUpperCase()}
                              <br />
                              Country : {h.country.toUpperCase()}
                              <br />
                              Port of Shipment : {h.portShipment.toUpperCase()}
                              <br />
                              Port of Destination :{" "}
                              {h.portDestination.toUpperCase()} <br />
                              Container Type : {h.containerType.toUpperCase()}
                              <br />
                              20 " FT Size Quantity : {h.quantityFT20} <br />
                              40 " FT Size Quantity : {h.quantityFT40} <br />
                              45 " FT Size Quantity : {h.quantityFT45} <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {h.bookingStatus !== "waiting payment" ? (
                        <div>{h.bookingStatus}</div>
                      ) : (
                        <div style={{ marginTop: "10px" }}>
                          <label htmlFor="contained-button-file">
                            <input
                              multiple
                              type="file"
                              onChange={(e) => {
                                let imgData = [...img];
                                imgData[i] = {
                                  picturePreview: URL.createObjectURL(
                                    e.target.files[0]
                                  ),
                                  pictureAsFile: e.target.files[0],
                                };
                                setIMG(imgData);
                              }}
                            />
                          </label>
                          <div>
                            <button
                              style={{
                                width: "90px",
                                marginTop: "20px",
                                marginRight: "10px",
                              }}
                              type="button"
                              class="btn btn-danger"
                              onClick={() => {
                                let imgData = [...img];
                                imgData.splice(i, 1);
                                setIMG(imgData);
                              }}
                            >
                              Delete
                            </button>
                            <button
                              style={{ width: "90px", marginTop: "20px" }}
                              type="button"
                              class="btn btn-success"
                              onClick={(e) => {
                                const formData = new FormData();
                                formData.append(
                                  "fileData",
                                  img[i].pictureAsFile,
                                  h.bookingId
                                );

                                axios
                                  .post(
                                    "http://localhost:3001/uploadpayment",
                                    formData
                                  )
                                  .then((response) => {
                                    if (response.data.status === 200) {
                                      alert("Upload payment successfully");
                                      window.location = "/history";
                                    }
                                  });
                              }}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                    <td>
                      {img.length > 0 && img[i] ? (
                        <div>
                          <img
                            src={img[i].picturePreview}
                            width="100"
                            height="150"
                          ></img>
                        </div>
                      ) : h.bookingStatus === "paid" ? (
                        <div>
                          <img
                            src={
                              "http://localhost:3001/imgpayment/" + h.bookingId
                            }
                            width="100"
                            height="150"
                          ></img>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Services;
