import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Login from './pages/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import User from './pages/User/User';
import Booking from './pages/About/Booking';
import Detail from './pages/About/Detail';
import UserUpdate from './pages/User/UserUpdate';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/home" exact>
          <Home/>
        </Route>
        <Route path="/detail" exact>
          <Detail/>
        </Route>
        <Route path="/booking" exact>
          <About/>
        </Route>
        <Route path="/serch" exact>
          <Booking/>
        </Route>
        <Route path="/history" exact>
          <Services/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/userupdate" exact>
          <UserUpdate/>
        </Route>
        <Route path="/user" exact>
          <User/>
        </Route>
        <Redirect to="/login" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;
