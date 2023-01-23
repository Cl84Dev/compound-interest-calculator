import { useState } from "react";
import "./App.css";
import Calculator from "./Calculator";
import Result from "./Result";

const App = () => {
  const [initialValueIncome, setInitialValueIncome] = useState(0);
  const [mensalValueIncome, setMensalValueIncome] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [mensalValue, setMensalValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [toggle, setToggle] = useState(true);

  const handleInitialValueIncome = (initialValue, interestRate, period) => {
    setInitialValueIncome(
      Math.pow(1 + interestRate / 100, period) * initialValue
    );
    setInitialValue(Number(initialValue));
    setInterestRate(Number(interestRate));
    setPeriod(Number(period));
    setToggle(!toggle);
  };

  const handleMensalValueIncome = (mensalValue, interestRate, period) => {
    const months = period * 12;
    const mensalRate = Math.pow(1 + interestRate / 100, 1 / 12) - 1;
    setMensalValueIncome(
      ((Math.pow(1 + mensalRate, months) - 1) / mensalRate) * mensalValue
    );
    setMensalValue(Number(mensalValue));
  };

  const handleSetToggle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="m-3 d-flex flex-column align-items-center">
      <h1 className="text-center">Compound Interest Calculator</h1>
      {toggle && (
        <Calculator
          handleInitialValueIncome={handleInitialValueIncome}
          handleMensalValueIncome={handleMensalValueIncome}
        />
      )}
      {!toggle && (
        <Result
          initialValueIncome={initialValueIncome}
          mensalValueIncome={mensalValueIncome}
          initialValue={initialValue}
          mensalValue={mensalValue}
          interestRate={interestRate}
          period={period}
          handleSetToggle={handleSetToggle}
        />
      )}
    </div>
  );
};

export default App;
