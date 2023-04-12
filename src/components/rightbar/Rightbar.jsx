import React from "react";
import "./Rightbar.css";
function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img
            className="birthday-image"
            src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png"
            alt=""
          />
          <span className="birthday-text">
            {" "}
            <b>Paula Foster </b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <img
          className="rightbar-ad"
          src="https://static-cse.canva.com/blob/1033576/1600w-2RaH8HkJvcA.jpg"
          alt=""
        />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          <li className="rightbar-friend">
            <div className="right-profile-image-container">
              <img
                className="rightbar-profile-image"
                src="https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863"
                alt=""
              />
              <span className="rightbar-online"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
