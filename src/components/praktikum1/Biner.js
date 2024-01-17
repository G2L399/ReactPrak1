import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NumberConverter = () => {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");
  const [octal, setOctal] = useState("");
  const [hexadecimal, setHexadecimal] = useState("");

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);

    // Convert to other bases
    setBinary(Number(value).toString(2));
    setOctal(Number(value).toString(8));
    setHexadecimal(Number(value).toString(16).toUpperCase());
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);

    // Convert to other bases
    setDecimal(parseInt(value, 2).toString(10));
    setOctal(parseInt(value, 2).toString(8));
    setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
  };

  const handleOctalChange = (e) => {
    const value = e.target.value;
    setOctal(value);

    // Convert to other bases
    setDecimal(parseInt(value, 8).toString(10));
    setBinary(parseInt(value, 8).toString(2));
    setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
  };

  const handleHexadecimalChange = (e) => {
    const value = e.target.value;
    setHexadecimal(value);

    // Convert to other bases
    setDecimal(parseInt(value, 16).toString(10));
    setBinary(parseInt(value, 16).toString(2));
    setOctal(parseInt(value, 16).toString(8));
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="form-group">
            <label className="h6" htmlFor="decimal">
              Decimal:
            </label>
            <input
              type="text"
              className="form-control"
              id="decimal"
              value={decimal}
              onChange={handleDecimalChange}
            />
          </div>
          <div className="form-group">
            <label className="h6" htmlFor="binary">
              Binary:
            </label>
            <input
              type="text"
              className="form-control"
              id="binary"
              value={binary}
              onChange={handleBinaryChange}
            />
          </div>
          <div className="form-group">
            <label className="h6" htmlFor="octal">
              Octal:
            </label>
            <input
              type="text"
              className="form-control"
              id="octal"
              value={octal}
              onChange={handleOctalChange}
            />
          </div>
          <div className="form-group">
            <label className="h6" htmlFor="hexadecimal">
              Hexadecimal:
            </label>
            <input
              type="text"
              className="form-control"
              id="hexadecimal"
              value={hexadecimal}
              onChange={handleHexadecimalChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberConverter;
