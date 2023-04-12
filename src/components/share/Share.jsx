import React from "react";
import "./Share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Share() {
  return (
    <div className="share-container">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-profile-image"
            src="https://i.pinimg.com/736x/1c/42/db/1c42dbe4cfb44025ac69d041568cf2c5.jpg"
            alt=""
          />
          <input
            className="share-profile-text"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMediaIcon htmlColor="tomato" className="share-icon" />
              <span className="share-option-text">Photo/Video</span>
            </div>
            <div className="share-option">
              <LabelIcon htmlColor="blue" className="share-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <LocationOnIcon htmlColor="green" className="share-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="share-icon" />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
