import React from "react";
import "./Rightbar.css";
import { Users } from "../utils/constants";
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
            <b>Paula Foster </b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <img
          className="rightbar-ad"
          src="https://static-cse.canva.com/blob/1033576/1600w-2RaH8HkJvcA.jpg"
          alt=""
        />
        <h4 className="rightbar-title">Online Friends</h4>
        {Users.map((item) => (
          <ul key={item.id} className="rightbar-friend-list">
            <li className="rightbar-friend">
              <div className="right-profile-image-container">
                <img
                  className="rightbar-profile-image"
                  src={item.profilepicture}
                  alt=""
                />
                <span className="rightbar-online"></span>
              </div>
              <span className="rightbar-online-usename">{item.userName}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Rightbar;
