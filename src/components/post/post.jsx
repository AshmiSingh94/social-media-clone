import React from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-image"
              src="https://www.balisafarimarinepark.com/wp-content/uploads/2022/09/animals.jpg"
              alt=""
              width="100px"
              height="100px"
            />
            <span className="post-username">Iveth Luna</span>
            <span className="post-date"> 5 mins ago</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <div className="span post-text">Hey! Its my first post 😃</div>
          <img
            className="post-img"
            src="https://www.balisafarimarinepark.com/wp-content/uploads/2022/09/animals.jpg"
            alt=""
          />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <ThumbUpIcon htmlColor="blue"/>
            <FavoriteIcon htmlColor="red"/>
           <span className="post-like-counter">32 people liked</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default post;
