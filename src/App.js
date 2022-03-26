import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Serch from "./pages/About/Serch";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import Login from "./pages/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import User from "./pages/User/User";
import Booking from "./pages/About/Booking";
import Detail from "./pages/About/Detail";
import UserUpdate from "./pages/User/UserUpdate";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/home" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/booking/:id" exact>
            <Navbar />
            <Detail />
          </Route>
          <Route path="/booking" exact>
            <Navbar />
            <Booking />
          </Route>
          {/* <Route path="/serch" exact>
        <Navbar/>
          <Booking/>
        </Route> */}
          <Route path="/history" exact>
            <Navbar />
            <History />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/contact" exact>
            <Navbar />
            <Contact />
          </Route>
          <Route path="/userupdate" exact>
            <Navbar />
            <UserUpdate />
          </Route>
          <Route path="/user" exact>
            <Navbar />
            <User />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
