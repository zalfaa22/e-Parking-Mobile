import React from 'react'
import './css/tambahtiket.css'

export default function TambahTiket() {
  return (
    <>
    <div className='tambahtiket'>
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
            <a href="/scantiket">
              <img src="../assets/arrow-left.svg" alt="" />
            </a>
            <div className="text">
              <p className="m-0 fw-bold">Tambah Tiket Manual</p>
            </div>
          </div>
        </div>
        </div>
        <div className='container2'>
        <div className='content text-center'>
            <a href='/tambahtiketmasuk'>
            <img src='../assets/tambahtiket/tiket-masuk.svg' className='img-fluid tiket-masuk' alt=''/>
            </a>
            <a href='/tambahtiketkeluar'>
            <img src='../assets/tambahtiket/tiket-keluar.svg' className='img-fluid' alt=''/>
            </a>
        </div>
        </div>
    </div>
    </>
  )
}
