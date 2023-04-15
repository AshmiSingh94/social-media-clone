import React from "react";
import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

function profile() {
  return (
    <div>
      <div>
        <Topbar />
        <div className="profile">
          <Sidebar className="profile-sidebar" />
          <div className="profile-right">
            <div className="profile-right-top">
              <div className="profile-cover">
                <img
                  className="profile-cover-image"
                  src="https://wallpapercave.com/wp/wp4700271.jpg"
                  alt=""
                />
                <img
                  className="profile-user-image"
                  src="https://s3.eu-west-1.amazonaws.com/presspage-production-content/uploads/2580/nature_and_happiness-503786.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="profile-info">
              <div className="profile-info-name">Stella Hill</div>
              <span className="profile-info-description">
                Get out there and live a little!
              </span>
            </div>
            <div className="profile-right-bottom">
              <Feed />
              <Rightbar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
