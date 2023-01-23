import { useState } from "react";
import "./Calculator.css";

const Calculator = ({ handleInitialValueIncome, handleMensalValueIncome }) => {
  const [initialValue, setInitialValue] = useState(0);
  const [mensalValue, setMensalValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);

  const handleCalculate = () => {
    if (initialValue < 0 || mensalValue < 0 || interestRate < 1 || period < 1) {
      alert("Set correct values. See the intructions.");
    } else {
      handleInitialValueIncome(initialValue, interestRate, period);
      handleMensalValueIncome(mensalValue, interestRate, period);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="calculator container-fluid border rounded-2 m-3 p-3 d-flex flex-column align-items-center shadow-lg">
        <h2>Calculator</h2>
        <label className="m-2" htmlFor="initial-value">
          Initial Value:{" "}
          <input
            name="initial-value"
            type="number"
            onChange={(e) => setInitialValue(e.target.value)}
          />
        </label>

        <label className="m-2" htmlFor="monthly-value">
          Monthly Value:{" "}
          <input
            name="monthly-value"
            type="number"
            onChange={(e) => setMensalValue(e.target.value)}
          />
        </label>

        <label className="m-2" htmlFor="interest-rate">
          Interest Rate (%):{" "}
          <input
            name="interest-rate"
            type="number"
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>

        <label className="m-2" htmlFor="period">
          Period (years):{" "}
          <input
            name="period"
            type="number"
            onChange={(e) => setPeriod(e.target.value)}
          />
        </label>

        <button className="m-2 btn btn-primary" onClick={handleCalculate}>
          Calculate
        </button>
      </div>

      <div className="intructions container-fluid border rounded-2 m-3 p-3 shadow-lg">
        <h2 className="text-center">Instructions</h2>

        <ul>
          <li>
            <span className="fw-bold">Initial Value</span>: The amount you want
            to start staking or doing a single staking. Optional entry.
          </li>
          <li>
            <span className="fw-bold">Mensal Value</span>: The amount you want
            to stake monthly. Optional entry.
          </li>
          <li>
            <span className="fw-bold">Interest Rate</span>: The annual interest
            rate of your investment. Mandatory entry.
          </li>
          <li>
            <span className="fw-bold">Period</span>: The time, in years, you
            want to keep your stakings. Mandatory entry.
          </li>
          <li className="fw-bold">
            No negative values are allowed in any field.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
