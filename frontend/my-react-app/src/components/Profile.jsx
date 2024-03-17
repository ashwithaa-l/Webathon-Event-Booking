import React from 'react';


function Profile() {
  return (
    <>
<div className="wrapper">
    <div className="left">
      
      <h4>Ashwithaa</h4>
      <p>hh</p>
    </div>
    <div className="right">
      <div className="info">
        <h3>User Details</h3>
        <div className="info_data">
          <div className="data">
            <h4>Email</h4>
            <p>ash@gmail.com</p>
          </div>
          <div className="data">
            <h4>Phone</h4>
            <p>1234998761</p>
          </div>
        </div>
      </div>

      <div className="projects">
      <h3>Events</h3>
        <div className="projects_data">
          <div className="data">
            <h4>Attended</h4>
            <p>6</p>
          </div>
          <div className="data">
            <h4>Registered</h4>
            <p>3</p>
          </div>
        </div>
      </div>

      <div className="social_media">
        <ul>
          <li>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </>
  );
}

export default Profile;
