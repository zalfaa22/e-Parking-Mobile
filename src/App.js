import React from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import ScanTiket from "./pages/ScanTiket";
import ScanMasuk from "./pages/ScanMasuk";
import ScanKeluar from "./pages/ScanKeluar";
import Success from "./pages/Success";
import TambahTiket from "./pages/TambahTiket";
import TiketMasuk from "./pages/TiketMasuk";
import TiketKeluar from "./pages/TiketKeluar";
import TidakSesuai from "./pages/TidakSesuai";

function App() {
  return (
    <div className="App">
      {/* <StatusBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scantiket" element={<ScanTiket />} />
        <Route path="/scantiketmasuk" element={<ScanMasuk />} />
        <Route path="/scantiketkeluar" element={<ScanKeluar />} />
        <Route path="/success" element={<Success />} />
        <Route path="/tambahtiket" element={<TambahTiket />} />
        <Route path="/tambahtiketmasuk" element={<TiketMasuk />} />
        <Route path="/tambahtiketkeluar" element={<TiketKeluar />} />
        <Route path="/tidaksesuai" element={<TidakSesuai />} />
      </Routes>
    </div>
  );
}

export default App;
