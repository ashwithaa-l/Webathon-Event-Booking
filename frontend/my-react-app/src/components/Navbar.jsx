import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Registration">Event-Booking</Link>
      <Link to="/Eventpage">Search-Events</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Signup">Signup</Link>
      <Link to="/Aboutus">Aboutus</Link>
    </div>
  );
};

export default Navbar;