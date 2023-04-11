import React from "react";
import './Home.css'
import Topbar from "../components/Topbar/Topbar";
import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
function Home() {
  return (
    <div className="home-container">
      <Topbar />
      <div className="home-container-details">
      <Sidebar/>
        <Feed/>
        <Rightbar/>
        
      </div>
    </div>
  );
}

export default Home;
