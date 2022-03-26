import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import "./User.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const User = () => {
  const [accountInfo, setAccountInfo] = useState([]);
  const [edit, setEdit] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email,setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    let axios = Axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    axios.get("http://localhost:3001/account").then((response) => {
      if (response.data.status === 200) {
        setAccountInfo(response.data.info);
        setFirstName(response.data.info.firstName);
        setLastName(response.data.info.lastName);
        setPhoneNum(response.data.info.phoneNum);
        setEmail(response.data.info.email);
      }
    });
  }, []);

  const updateInfo = () => {
    const token = localStorage.getItem("token");
    let axios = Axios.create({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    axios
      .post("http://localhost:3001/updateinfo", {
        firstName: firstName,
        lastName: lastName,
        phoneNum: phoneNum,
      })
      .then((response) => {
        if (response.data.status === 200) {
          alert(response.data.msg);
          setEdit(true);
        }
      });
  };
  return (
    <body className="ty">
      <div className="container2">
        <div className="icon">
          <i class="fa-solid fa-user-gear fa-10x"></i>
        </div>

        <header className="headtext"> User Control demo</header>
      </div>

      <div className="container1">
        <Box className="textBox" noValidate autoComplete="off">
          <TextField
            id="firstName"
            label="Name"
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            InputProps={{
              readOnly: edit,
            }}
          />
          <TextField
            label="Surname"
            placeholder="Surname"
            variant="standard"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            InputProps={{
              readOnly: edit,
            }}
          />
          <br />
          <TextField
            label="Phone"
            placeholder="Phone Number"
            variant="standard"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
            InputProps={{
              readOnly: edit,
            }}
          />
          <TextField
            label="Email"
            placeholder="Email"
            variant="standard"
            value={email}
            InputProps={{
              readOnly: true,
            }}
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
          {/* <TextField
            fullWidth
            label="Address"
            placeholder="Address"
            id="fullWidth"
            variant="standard"
          /> */}
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
            onClick={() => setEdit(false)}
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
            // data-toggle="modal"
            // data-target="#exampleModalCenter"
            onClick={updateInfo}
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
                  <NavLink
                    className="nav-link"
                    class="user"
                    to="/userupdate"
                    exact
                  >
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
export default User;
