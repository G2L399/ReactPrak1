import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

class Beranda extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <br />
        <a className="h1" href="BMI">BMI</a> | 
        <a className="h1" href="Biner">Biner</a> |
        <a className="h1" href="Bank">Bank</a>
        <a className="h1" href="Diskon"></a>
      </div>
    );
  }
}

export default Beranda;
