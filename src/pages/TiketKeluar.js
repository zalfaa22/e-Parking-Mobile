import React from 'react'

export default function TiketKeluar() {
  return (
    <div className='tiketkeluar tiketmasuk'>
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
            <a href="/tambahtiket">
              <img src="../assets/arrow-left.svg" alt="" />
            </a>
            <div className="text">
              <p className="m-0 fw-bold">Tambah Tiket Manual</p>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="content">
            <div className="form">
              <p>Nomor Polisi</p>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control4"
                  placeholder="Masukkan Nomor Polisi"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-bottom">
          <div className="scan">
            <a href="/success">
              <button>
                Kirim
              </button>
            </a>
          </div>
        </div>
        </div>
    </div>
  )
}
