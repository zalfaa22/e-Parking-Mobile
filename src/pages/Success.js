import React from 'react'
import "./css/success.css"

export default function Success() {
  return (
    <>
    <div className='success'>
    <div className='component-container'>
    <div className="statusbar2">
          <div className="statusbar-top d-flex align-items-center justify-content-between">
            <div>14:42</div>
            <div className="d-flex align-items-center">
              <img src="../assets/Connection-white.svg" className="me-2" alt="" />
              <img src="../assets/Wifi-white.svg" className="me-2" alt="" />
              <img src="../assets/Battery-white.svg" alt="" />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between bar-navbar">
            {/* <a href="/">
              <img src="../assets/arrow-left.svg" alt="" />
            </a> */}
            <div className="text p-0">
              <p className="m-0 fw-bold">Scan Tiket</p>
            </div>
          </div>
        </div>
        </div>
    <div className='container2'>
        <div className='content text-center'>
            <img src='../assets/Verified Check.svg' alt=''/>
            <p>Data tiket telah berhasil disimpan</p>
        </div>
    </div>
    <div className="button-bottom">
          <div className="scan">
            <a href="/">
              <button style={{backgroundColor: "#EDEDED", color: "#269544"}}>
              KEMBALI KE BERANDA
              </button>
            </a>
          </div>
        </div>
    </div>
    </>
  )
}
