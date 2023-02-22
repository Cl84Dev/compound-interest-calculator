import { useState } from "react";
import "./Calculator.css";

const Calculator = ({
  initialValue,
  setInitialValue,
  monthlyValue,
  setMonthlyValue,
  interestRate,
  setInterestRate,
  period,
  setPeriod,
  setToggleScreen,
  setShowModal,
  handleInitialValueIncome,
  handleMonthlyValueIncome,
}) => {
  const handleCalculate = () => {
    if (
      initialValue < 0 ||
      monthlyValue < 0 ||
      interestRate < 0 ||
      period < 1
    ) {
      setShowModal(true);
    } else {
      handleInitialValueIncome();
      handleMonthlyValueIncome();
      setToggleScreen("result");
    }
  };

  return (
    <article className="d-flex flex-column align-items-center">
      <section className="calculator container-fluid border rounded-2 m-3 p-3 d-flex flex-column align-items-center shadow-lg">
        <h2>Calculator</h2>
        <label className="form-label m-2" htmlFor="initial-value">
          Initial Value:{" "}
          <input
            id="initial-value"
            type="number"
            className="form-control"
            onChange={(e) => setInitialValue(e.target.value)}
          />
        </label>

        <label className="form-label m-2" htmlFor="monthly-value">
          Monthly Value:{" "}
          <input
            id="monthly-value"
            type="number"
            className="form-control"
            onChange={(e) => setMonthlyValue(e.target.value)}
          />
        </label>

        <label className="form-label m-2" htmlFor="interest-rate">
          Interest Rate (%):{" "}
          <input
            id="interest-rate"
            type="number"
            className="form-control"
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>

        <label className="form-label m-2" htmlFor="period">
          Period (years):{" "}
          <input
            id="period"
            type="number"
            className="form-control"
            onChange={(e) => setPeriod(e.target.value)}
          />
        </label>

        <button className="m-2 btn btn-primary" onClick={handleCalculate}>
          Calculate
        </button>
      </section>

      <section className="intructions container-fluid border rounded-2 m-3 p-3 shadow-lg">
        <h2 className="text-center">Instructions</h2>

        <ul>
          <li>
            <span className="fw-bold">Initial Value</span>: The amount you want
            to start investing or doing a single investment. Optional entry.
          </li>
          <li>
            <span className="fw-bold">Monthly Value</span>: The amount you want
            to invest monthly. Optional entry.
          </li>
          <li>
            <span className="fw-bold">Interest Rate</span>: The annual interest
            rate of your investment. Mandatory entry.
          </li>
          <li>
            <span className="fw-bold">Period</span>: The time, in years, you
            want to keep your investment. Mandatory entry.
          </li>
          <li className="fw-bold">
            No negative values are allowed in any field.
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Calculator;
