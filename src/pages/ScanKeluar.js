import React from 'react'

export default function ScanKeluar() {
  return (
    <div className='scankeluar scanmasuk'>
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
              <p className="m-0 fw-bold">Scan Tiket Masuk</p>
            </div>
          </div>
        </div>
        </div>
        <div className="container2">
          <div className="content">
            <div className="form">
              <p>Event</p>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Gathering"
                />
              </div>
            </div>
            <div className="form">
              <p>Jam Pelaksanaan</p>
              <div className="d-flex pelaksanaan">
                <input
                  type="text"
                  className="form-control "
                  placeholder="20.00 WIB"
                />
              </div>
            </div>
            <div className="form">
              <p>Jam Masuk</p>
              <div className="d-flex jam">
                <input
                  type="text"
                  className="form-control "
                  placeholder="20.10 WIB"
                />
              </div>
            </div>
            <div className="form">
              <p>Nomor Polisi</p>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control4"
                  placeholder="N 2019 NN"
                />
              </div>
            </div>
            <div className="form">
              <p>Foto Kendaraan dan Pengendara</p>
              <div className="d-flex row row-cols-2 card-wrap p-0 m-0">
              <div className="group" style={{paddingRight: "8px"}}>
                <div className="col">
                <div className="card text-center card1">
            
                  </div>
                </div>
              </div>
              <div className="group" style={{paddingLeft: "8px"}}>
                <div className="col">
                  <div className="card text-center card2">
                    <img
                      src="../assets/scan/camera.svg"
                      className=""
                      alt="..."
                    />
                    <p className="m-0">Ambil foto kendaraan</p>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        <div className="button-bottom">
          <div className="scan">
            <a href="/success">
              <button>
                Sesuai
              </button>
            </a>
            <a href="/tidaksesuai">
              <button style={{backgroundColor: "#952626", marginTop: "8px"}}>
                Tidak Sesuai
              </button>
            </a>
          </div>
        </div>
    </div>
  )
}
