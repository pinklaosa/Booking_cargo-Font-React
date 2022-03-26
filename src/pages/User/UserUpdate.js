import React from "react";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import "./User.css";
import { NavLink } from "react-router-dom";

const UserUpdate = () => {
  return (
    <body className="ty">
      <div className="container2">
        <div className="icon">
          <i class="fa-solid fa-user-gear fa-10x"></i>
        </div>

        <header className="headtext"> User Control demo</header>
      </div>

      <div className="container1">
        <Box className="textBox">
          <TextField
            id="standard-basic"
            label="Name"
            placeholder="Username"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Surname"
            placeholder="Surname"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Phone"
            placeholder="Phone Number"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Email"
            placeholder="Email"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="password"
            placeholder="Password"
            variant="standard"
            type="password"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Confirm password"
            placeholder="Confirm Password"
            variant="standard"
            type="password"
          />
          <br />
        </Box>
        <Box
          className="fullbox"
          sx={{
            width: 470,
            maxWidth: "75%",
          }}
        >
          <TextField
            fullWidth
            label="Address"
            placeholder="Address"
            id="fullWidth"
            variant="standard"
          />
        </Box>

        <div class="col">
          <button
            type="button"
            style={{
              marginTop: "30px",
              width: "150px",
              marginLeft: "65px",
            }}
            class="btn btn-secondary"
          >
            Edit
          </button>

          <button
            type="button"
            style={{
              marginTop: "30px",
              width: "150px",
              marginLeft: "20px",
            }}
            class="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            Save
          </button>
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
                <div
                  class="modal-header"
                  style={{ backgroundColor: "#2e2e2e" }}
                >
                  <h5
                    class="modal-title"
                    id="exampleModalLongTitle"
                    style={{ color: "white", marginLeft: "110px" }}
                  >
                    Confirm User data change
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
                      fontSize: "100px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{ width: "180px", height: "180px" }}
                      src="https://icon-library.com/images/account-settings-icon/account-settings-icon-22.jpg"
                      alt=""
                    ></img>
                  </p>
                </div>
                <div
                  class="modal-footer"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <NavLink className="nav-link" class="user" to="/user" exact>
                    <button
                      style={{ width: "100" }}
                      type="button"
                      class="btn btn-success"
                    >
                      Confirm
                    </button>
                  </NavLink>

                  <button
                    style={{ marginRight: "155px", width: "100px" }}
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
    </body>
  );
};
export default UserUpdate;
