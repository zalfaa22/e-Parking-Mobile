import React from "react";
import "./css/scan.css";

export default function ScanTiket() {
  return (
    <>
      <div className="scantiket">
        <div className='component-container'>
        <div className="statusbar2">
          <div className="statusbar-top d-flex align-items-center justify-content-between">
            <div>14:42</div>
            <div className="d-flex align-items-center">
              <img src="../assets/Connection.svg" className="me-2" alt="" />
              <img src="../assets/Wifi.svg" className="me-2" alt="" />
              <img src="../assets/Battery.svg" alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between bar-navbar">
            <a href="/">
              <img src="../assets/arrow-left.svg" alt="" />
            </a>
            <div className="text">
              <p className="m-0 fw-bold">Scan Tiket</p>
            </div>
          </div>
        </div>
        </div>
        <div className="container2">
          <div className="content text-center">
            <a href="/scantiketmasuk">
            <img src="../assets/scan/scan.svg" className="scan-img" alt="" />
            </a>
          </div>
        </div>
        <div className="button-bottom">
          <div className="scan">
            <a href="/tambahtiket">
              <button>
                <img src="../assets/plus.svg" alt="" />
                TAMBAH MANUAL
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
