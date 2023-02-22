import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./App.css";
import Calculator from "./Calculator";
import Result from "./Result";

const App = () => {
  const [initialValueIncome, setInitialValueIncome] = useState(0);
  const [monthlyValueIncome, setMonthlyValueIncome] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const [monthlyValue, setMonthlyValue] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);
  const [toggleScreen, setToggleScreen] = useState("calculator");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleInitialValueIncome = () => {
    setInitialValueIncome(
      Math.pow(1 + interestRate / 100, period) * initialValue
    );
    setInitialValue(Number(initialValue));
    setInterestRate(Number(interestRate));
    setPeriod(Number(period));
  };

  const handleMonthlyValueIncome = () => {
    const months = period * 12;
    const monthlyRate = Math.pow(1 + interestRate / 100, 1 / 12) - 1;
    setMonthlyValueIncome(
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * monthlyValue
    );
    setMonthlyValue(Number(monthlyValue));
  };

  const handleSetToggleScreen = () => {
    setInitialValue(0);
    setMonthlyValue(0);
    setInterestRate(0);
    setPeriod(0);
    setToggleScreen("calculator");
  };

  return (
    <main className="m-3 d-flex flex-column align-items-center">
      <h1 className="text-center rounded-2 p-2">
        Compound Interest Calculator
      </h1>
      {toggleScreen === "calculator" ? (
        <Calculator
          initialValue={initialValue}
          setInitialValue={setInitialValue}
          monthlyValue={monthlyValue}
          setMonthlyValue={setMonthlyValue}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          period={period}
          setPeriod={setPeriod}
          setToggleScreen={setToggleScreen}
          setShowModal={setShowModal}
          handleInitialValueIncome={handleInitialValueIncome}
          handleMonthlyValueIncome={handleMonthlyValueIncome}
        />
      ) : (
        <Result
          initialValueIncome={initialValueIncome}
          monthlyValueIncome={monthlyValueIncome}
          initialValue={initialValue}
          monthlyValue={monthlyValue}
          interestRate={interestRate}
          period={period}
          handleSetToggleScreen={handleSetToggleScreen}
        />
      )}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Invalid values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You entered invalid values. Please, check the instructions.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default App;
