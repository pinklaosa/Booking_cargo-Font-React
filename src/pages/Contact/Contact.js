import React from "react";


import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p style={{marginTop:"50px"}}>
        <i class="fa-solid fa-map-location-dot"></i>Address 55/5 M.5 Sriracha
        District Chonburi province Thailand 20555
        <br />
        <br />
        <i class="fa-solid fa-phone"></i>Phone : 099-999-9999
        <br />
        <br />
        <i class="fa-solid fa-envelope"></i>Email : oceanfreight_demo@gmail.com
        <br />
        <br />
        <i class="fa-brands fa-facebook"></i>Facebook : oceanfreight demo
        <br />
        <br />
        <i class="fa-brands fa-line"></i>Line : oceanfreight_demo
        <br />
        <br />
      </p>
      <p2>
        <i class="fa-solid fa-bullhorn"></i>You can contact us during business
        hours Monday to Saturday from 9:00 a.m. to 5:30 p.m.
      </p2>
    </div>
  );
};
export default Contact;
