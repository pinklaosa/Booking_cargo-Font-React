import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './Home.css';
import { NavLink } from "react-router-dom";

const Home = () => {
  
  
  return (
    <div className="home">

      <div className="Header">
        <h1>Welcome Booking Cargo</h1>
        </div>
      <div className="contentHome">
      
      <div className="collap" style={{ marginTop: "100px" }}>
        <Carousel>
        <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "800px", height: "600px", borderRadius: "20px" }}
              src="https://www.aumanufacturing.com.au/wp-content/uploads/2020/06/5a2993aba3b47486088b4667.jpg"
              alt="First slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "800px", height: "600px", borderRadius: "20px" }}
              src="https://www.mondicon.com/images/new/sub/cargo_sub.png"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ width: "800px", height: "600px", borderRadius: "20px" }}
              src="https://gdb.voanews.com/4fe319f2-db27-4f78-8911-52fcf4affb98_w1200_r1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      
        <div className="titleHome">
        <h2>You can make a quick reservation here.</h2>
        <NavLink className="nav-link" class="user" to="/booking" exact>
        <button className="btn-2">Click Here</button>
        </NavLink>
        </div>
      </div>
      
        
        
    </div>
  );
};
export default Home;
