import React, { useState } from "react";
import './css/tidaksesuai.css'

export default function TidakSesuai() {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const handleFileUpload1 = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedImage1(e.target.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const handleFileUpload2 = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedImage2(e.target.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <>
    <div className='tidaksesuai'>
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
            <a href="/scantiketkeluar">
              <img src="../assets/arrow-left.svg" alt="" />
            </a>
            <div className="text">
              <p className="m-0 fw-bold">Tidak Sesuai</p>
            </div>
          </div>
        </div>
        </div>
        <div className='container2'>
            <div className='content'>
            <div className="form">
              <p>Masukkan Nomor Polisi</p>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control "
                />
              </div>
            </div>
            <div className="form">
              <p>Foto Pengambil dan Scan KTP </p>
              <div className="d-flex row row-cols-2 card-wrap m-0">
              <div className="group" style={{padding: "0px", paddingRight: "5.5px"}}>
                <div className="col">
                <label
                      htmlFor="uploadInput1"
                      className="card text-center"
                      style={{
                        backgroundImage: `url(${selectedImage1})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <input
                        type="file"
                        id="uploadInput1"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileUpload1(e.target.files)}
                      />
                      {!selectedImage1 && (
                        <>
                    <img
                      src="../assets/scan/camera.svg"
                      className=""
                      alt="..."
                    />
                    <p className="m-0">Ambil foto pengambil</p>
                    </>
                      )}
                  </label>
                </div>
              </div>
              <div className="group" style={{padding: "0px", paddingLeft: "5.5px"}}>
                <div className="col">
                <label
                      htmlFor="uploadInput2"
                      className="card text-center"
                      style={{
                        backgroundImage: `url(${selectedImage2})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <input
                        type="file"
                        id="uploadInput2"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileUpload2(e.target.files)}
                      />
                      {!selectedImage2 && (
                        <>
                    <img
                      src="../assets/scan/camera.svg"
                      className=""
                      alt="..."
                    />
                    <p className="m-0">Ambil foto Scan KTP</p>
                    </>
                      )}
                  </label>
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
                Kirim
              </button>
            </a>
          </div>
        </div>
    </div>
    </>
  )
}
