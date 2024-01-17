import React from "react";
import {Routes,Route} from "react-router-dom";
import "../../App.css";
import BMI from "./BMI.js";
import Home from "./home.js";
import Biner from "./Biner.js";
import Banks from "./Bank.js"
import Diskon from "./Diskon.js";
const Links = () => {
    return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/BMI" element={<BMI/>} />
            <Route path="/Biner" element={<Biner/>} />
            <Route path="/Bank" element={<Banks/>} />
            <Route path="/Diskon" element={<Diskon/>} />
        </Routes>
    </div>
    )
}

export default Links;