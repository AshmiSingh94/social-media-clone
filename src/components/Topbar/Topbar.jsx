import React from "react";
import "./Topbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbar-left">
        <span className="topbarLogo">Socialworld</span>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <SearchOutlinedIcon className="searchIcon" />
          <input
            className="search-input"
            placeholder="search for friends, posts, videos"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">HomePage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsNoneIcon />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img
          className="topbarImage"
          src="https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg"
          // width="60px"
          // height="60px"
          alt=""
        />
      </div>
    </div>
  );
}

export default Topbar;
