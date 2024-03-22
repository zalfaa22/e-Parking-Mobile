import React from "react";
import "./css/home.css";
import StatusBar from "../components/StatusBar";
import MenuBar from "../components/MenuBar";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <>
    <StatusBar/>
    <div className="container home">
        <div className="content">
      <div className="profile d-flex">
        <img src="../assets/home/profile.svg" alt="" />
        <div>
          <p className="profile-text1">Selamat Bertugas,</p>
          <p className="profile-text2">Bambang Sutrisno</p>
        </div>
      </div>
      <div className="card1 d-flex">
        <img src="../assets/home/Bus.svg" alt="" />
        <div className="card-text">
          <p className="text1">Total pengunjung hari ini,</p>
          <p className="text2">1.200 Pengunjung</p>
        </div>
      </div>
      <div className="d-flex double-card">
      <div className="card2">
        <img src="../assets/home/ticket.svg" alt="" />
        <div className="card-text">
          <p className="text1">Parkir dengan tiket,</p>
          <p className="text3">1.005 Pengunjung</p>
        </div>
      </div>
      <div className="card3">
        <img src="../assets/home/Danger.svg" alt="" />
        <div className="card-text">
          <p className="text1">Parkir tanpa tiket</p>
          <p className="text3">195 Pengunjung</p>
        </div>
      </div>
      </div>
      <div className="chart-wrap fw-medium">
        <p className="title fw-semibold">Grafik Pengunjung</p>
      <Chart/>
      </div>
    </div></div>
    <MenuBar/>
    </>
  );
}
