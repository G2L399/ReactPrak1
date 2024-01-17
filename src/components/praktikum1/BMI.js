import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class BMI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      bmi: null,
    };
  }

  calculateBMI = () => {
    const { weight, height } = this.state;
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    this.setState({ bmi });
  };

  getBMICategory = () => {
    const { bmi } = this.state;
    if (bmi === null) {
      return '';
    } else if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  render() {
    const { weight, height, bmi } = this.state;

    return (
      <div className="container mt-5">
        <h2>BMI Calculator</h2>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="weight">Weight (kg):</label>
            <input
              type="number"
              id="weight"
              className="form-control"
              value={weight}
              onChange={(e) => this.setState({ weight: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="number"
              id="height"
              className="form-control"
              value={height}
              onChange={(e) => this.setState({ height: e.target.value })}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" onClick={this.calculateBMI}>
              Calculate BMI
            </button>
          </div>
        </div>
        {bmi !== null && (
          <div className="mt-4">
            <h3>Your BMI is: {bmi}</h3>
            <h3 className="lead">BMI Category: {this.getBMICategory()}</h3>
          </div>
        )}
      </div>
    );
  }
}

export default BMI;
