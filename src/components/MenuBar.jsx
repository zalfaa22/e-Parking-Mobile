import React from "react";
import "./css/menuBar.css";

export default function MenuBar() {
  return (
    <div className='component-container'>
    <div className="menubar">
      <div className="d-flex justify-content-between align-items-end menu">
        <img src="../assets/menu-shape.svg" className="shape img-fluid" alt="" />
        <img src="../assets/home-icon.svg" className="home" alt="" />
        <a href="/scantiket">
        <img src="../assets/scan.svg" className="scan" alt="" />
        </a>
        <img src="../assets/profile.svg" className="profile" alt="" />
      </div>
    </div>
    </div>
  );
}
