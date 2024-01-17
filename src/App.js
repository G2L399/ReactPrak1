import React from "react";
import Utama from "./components/modul/utama";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Links from "./components/praktikum1/Link";
// class App extends React.Component {
//   render() {
//     return (
//       <div className="">
//         <hr style={{ backgroundColor: "red" }} />
//         <div className="d-flex justify-content-between">
//           <pre /> <Link to="/">Beranda</Link> |
//           <Link to="/tentangsaya">TentangSaya</Link>|
//           <Link to="/karya">Karya</Link> |<Link to="/kontak">Kontak</Link>{" "}
//           <pre />
//         </div>
//         <hr style={{ backgroundColor: "black" }} />
//         <div style={{ display: "flex"}}>
//           <img
//             src={logo}
//             alt=""
//             style={{ height: "50px"}}
//           />
//           <p className="">
//             <Utama />
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-evenly">
        <Link to="/">Home</Link>|<Link to="/BMI">BMI</Link>|
        <Link to="/Biner">Biner</Link>|<Link to="/Bank">Bank</Link>|<Link to="/Diskon">Diskon</Link>
        </div>
        <Links />
      </div>
    );
  }
}

export default App;
