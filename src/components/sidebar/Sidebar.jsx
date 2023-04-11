import React from "react";
import "./Sidebar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GroupIcon from "@mui/icons-material/Group";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-items">
            <RssFeedIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Feed</span>
          </li>
          <li className="sidebar-list-items">
            <ChatIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Chats</span>
          </li>
          <li className="sidebar-list-items">
            <PlayCircleIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Videos</span>
          </li>
          <li className="sidebar-list-items">
            <BookmarkIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>
          <li className="sidebar-list-items">
            <GroupIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Groups</span>
          </li>
          <li className="sidebar-list-items">
            <HelpOutlineIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Questions</span>
          </li>
          <li className="sidebar-list-items">
            <WorkIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Jobs</span>
          </li>
          <li className="sidebar-list-items">
            <EventIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Events</span>
          </li>
          <li className="sidebar-list-items">
            <SchoolIcon className="sidebar-icon" />
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="sidebar-button">Show More</button>
        <hr className="sidebar-hr" />
        <ul className="sidebar-friend-list">
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://imagesvibe.com/wp-content/uploads/2022/12/Cute-Cartoon-Images-For-Girl18-1.jpg"
              alt=""
            />
            <span className="sidebar-friend-name">Jane Doe</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://e1.pxfuel.com/desktop-wallpaper/698/757/desktop-wallpaper-beauty-cute-cartoon-girl-cartoon-attitude-girl.jpg"
              alt=""
            />
            <span className="sidebar-friend-name">Jhon Elton</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://i.pinimg.com/originals/61/1b/5f/611b5f8da375891b5883b83294527a15.jpg"
              alt=""
            />
            <span className="sidebar-friend-name">Berk Shire</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hqcwB9G5u4Vowje8fXgBLoip6qQmgjMDcg&usqp=CAU"
              alt=""
            />
            <span className="sidebar-friend-name">Charlie Shalame</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pSpxcOSAgvT0IYJohRHjbAFAd9Af8Z212Q&usqp=CAU"
              alt=""
            />
            <span className="sidebar-friend-name">Eugene Tucker</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://img.freepik.com/premium-photo/portrait-handsome-anime-boy-avatar-computer-graphic-background-2d-illustration_67092-1980.jpg?w=2000"
              alt=""
            />
            <span className="sidebar-friend-name">Eva Samal</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://i.pinimg.com/750x/d6/03/3c/d6033cc17cc5757255fe40443b09bf13.jpg"
              alt=""
            />
            <span className="sidebar-friend-name">Iggiy Wolf</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images-3.jpg"
              alt=""
            />
            <span className="sidebar-friend-name">Neha Disuza</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfJ61P-ea5B2joHyLROrQy07ZYkzDxsFaOYhnpYOSPpSjKvMtiCppNJrl8l3DIrJ2kkI&usqp=CAU"
              alt=""
            />
            <span className="sidebar-friend-name">Joe Marlow</span>
          </li>
          <li className="sidebar-friend">
            <img
              className="sidebar-friend-image"
              src="https://i.pinimg.com/originals/c2/58/58/c2585844d92c8ba5da623cae33efb984.jpg"
              alt=""
            />
            <span className="sidebar-friend-name">Priyanjal Joshi</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
