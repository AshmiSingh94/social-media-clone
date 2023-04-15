import { useState } from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function Post(props) {
  const { posts } = props;
  const [like, setLike] = useState(posts.like);
  const [liked, setLiked] = useState(false);
  
  const handleLike = () => {
    setLike(liked ? like - 1 : like + 1);
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              className="post-profile-image"
              src={posts.photo}
              alt=""
              width="100px"
              height="100px"
            />
            <span className="post-username">{posts.name}</span>
            <span className="post-date"> {posts.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVertIcon />
          </div>
        </div>
        <div className="post-center">
          <div className="span post-text">{posts.description}</div>
          <img className="post-img" src={posts.photo} alt="" />
        </div>

        <div className="post-bottom">
          <div className="post-bottom-left">
            <ThumbUpIcon htmlColor="blue" className="post-bottom-left-icon" onClick={handleLike} />
            <FavoriteIcon htmlColor="red" className="post-bottom-left-icon" onClick={handleLike} />
            <span className="post-like-counter">{like}</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">
              {posts.comment} {posts.comment > 1 ? "comments" : "comment"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
