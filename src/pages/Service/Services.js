import React from "react";
import "./Service.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Services = () => {
  const Input = styled('input')({
    display: 'none',
  });
  return (
    <div className="containerhelp">
      <div className="headHistory">
        <label style={{ marginLeft: "50px", fontSize: "30px" }}>History</label>
      </div>

      <div className="tableHistory">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style={{ marginLeft: "50px" }}>
                ORDER ID
              </th>
              <th scope="col">DATE/TIME</th>
              
              <th scope="col">STATUS</th>
              <th scope="col">AMOUNT</th>
              <th scope="col">ORDER DETAIL</th>
              <th scope="col">PAYMENT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <p style={{marginTop:"10px"}} >1011000111</p>
              </th>
              <td>
                <p style={{ marginTop: "10px" }}>02/03/2022 13:45 PM</p>
              </td>
              
              <td>
                <p style={{ marginTop: "10px", color: "orange" }}>Pending</p>
              </td>
              <td>
                <p style={{ marginTop: "10px" }}>2450.00 BATH</p>
              </td>
              <td>
              <p style={{marginTop:"6px"}}>
                  <a
                    class="btn btn-secondary"
                    style={{width:"80px"}}
                    data-toggle="collapse"
                    href="#multiCollapseExample1"
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
                      id="multiCollapseExample1"
                    >
                      <div class="card card-body" style={{ border:"1px solid gray",borderRadius:"15px",textAlign: "left" }}>
                        Oder id : <br />
                        Service ship : <br />
                        Country : <br />
                        Port of Shipment : <br />
                        Port of Destination : <br />
                        Date / Time : <br />
                        Container Type : <br />
                        Container Size : <br />
                        Container Quantity :
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div style={{marginTop:"6px"}}>
              <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
                <button
                  style={{ width: "90px",marginLeft:"10px"}}
                  type="button"
                  class="btn btn-success"
                >
                  Confirm
                </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p style={{marginTop:"10px"}}>1011000112</p>
              </th>
              <td>
                <p style={{ marginTop: "10px" }}>15/02/2022 14:25 PM</p>
              </td>
              
              <td>
                <p style={{ marginTop: "10px", color: "green" }}>Complete</p>
              </td>
              <td>
                <p style={{ marginTop: "10px" }}>1750.00 BATH</p>
              </td>
              <td>
              <p style={{marginTop:"6px"}}>
                  <a
                    class="btn btn-secondary"
                    style={{width:"80px"}}
                    data-toggle="collapse"
                    href="#multiCollapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    View
                  </a>
                </p>
                <div class="row">
                  <div class="col" style={{ width: "250px" }}>
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div class="card card-body" style={{ border:"1px solid gray",borderRadius:"15px",textAlign: "left" }}>
                        Oder id : <br />
                        Service ship : <br />
                        Country : <br />
                        Port of Shipment : <br />
                        Port of Destination : <br />
                        Date / Time : <br />
                        Container Type : <br />
                        Container Size : <br />
                        Container Quantity :
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <p style={{marginTop:"10px"}}>1011000113</p>
              </th>
              <td>
                <p style={{ marginTop: "10px" }}>11/02/2022 12:40 PM</p>
              </td>
             
              <td>
                <p style={{ marginTop: "10px", color: "red" }}>Canceled</p>
              </td>
              <td>
                <p style={{ marginTop: "10px" }}>2230.00 BATH</p>
              </td>
              <td>
              <p style={{marginTop:"6px"}}>
                  <a
                    class="btn btn-secondary"
                    style={{width:"80px"}}
                    data-toggle="collapse"
                    href="#multiCollapseExample3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample3"
                  >
                    View
                  </a>
                </p>
                <div class="row">
                  <div class="col" style={{width: "250px" }}>
                    <div
                      class="collapse multi-collapse"
                      id="multiCollapseExample3"
                    >
                      <div class="card card-body" style={{ border:"1px solid gray",borderRadius:"15px",textAlign: "left" }}>
                        Oder id : <br />
                        Service ship : <br />
                        Country : <br />
                        Port of Shipment : <br />
                        Port of Destination : <br />
                        Date / Time : <br />
                        Container Type : <br />
                        Container Size : <br />
                        Container Quantity :
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Services;
