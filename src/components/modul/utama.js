import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../App.css";
import Beranda from "./beranda";
import Karya from "./karya";
import Kontak from "./kontak";
import TentangSaya from "./tentangsaya";

const Utama = () => (
  <div > 
    <Routes>
      <Route exact path="/" element={<Beranda />} />
      <Route path="/karya" element={<Karya />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/tentangsaya" element={<TentangSaya />} />
    </Routes>
  </div>
);

export default Utama;
