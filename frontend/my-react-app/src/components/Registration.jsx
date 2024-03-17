import React from 'react';

function Registration() {
  return (
<div className="rcontainer">
      <h1 className="form-title">Event Registration Form</h1>
      <form action="#">
        <div className="main-user-info">
          <div className="user-input-box">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" />
          </div>
          <div className="user-input-box">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter Username" />
          </div>
          <div className="user-input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" />
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" />
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Event Name</label>
            <input type="password" id="password"  placeholder="Event Name" />
          </div>
          <div className="user-input-box">
            <label htmlFor="confirmPassword">Date</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
          </div>
        </div>
        <div className="gender-details-box">
          <span className="gender-title">Gender</span>
          <div className="gender-category">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="form-submit-btn">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}

export default Registration;