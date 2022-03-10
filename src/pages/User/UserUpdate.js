import React from "react";
import Box from "@mui/material/Box";
import "bootstrap/dist/css/bootstrap.min.css";
import TextField from "@mui/material/TextField";
import "./User.css";
import { NavLink } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const UserUpdate = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange1 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

 

  const handleClickShowPassword1 = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
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
        <Box className="textBox">
          <TextField
            id="standard-basic"
            label="Company"
            placeholder="Oceanfright"
            variant="standard"
          />
          <br />
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
        <FormControl sx={{ m: 1, width: '25ch',marginLeft:"70px" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange1('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

       
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
              <div class="modal-header" style={{ backgroundColor: "#2e2e2e" }}>
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
                    color: "green",
                  }}
                >
                  <img style={{width:"180px",height:"180px"}} src="https://icon-library.com/images/account-settings-icon/account-settings-icon-22.jpg" alt=""></img>
                </p>
              </div>
              <div class="modal-footer" style={{ backgroundColor: "#F5F5F5" }}>
              <NavLink className="nav-link" class="user" to="/user" exact>
                  <button
                    style={{ width: "80px" }}
                    type="button"
                    class="btn btn-success"
                  >
                    Confirm
                  </button>
                  </NavLink>

                <button
                  style={{ marginRight: "155px", width: "80px" }}
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
