import "./Result.css";

const Result = ({
  initialValueIncome,
  mensalValueIncome,
  initialValue,
  mensalValue,
  interestRate,
  period,
  handleSetToggle,
}) => {
  return (
    <div className="result container-fluid d-flex flex-column border rounded-2 m-3 p-3 align-items-center shadow-lg">
      <h2>Result</h2>
      <p>
        <span className="fw-bold">Invested Value</span>:{" "}
        {(initialValue + mensalValue * period * 12).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p>
        <span className="fw-bold">Period</span>: {period}{" "}
        {period === 1 ? "year" : "years"}
      </p>
      <p>
        <span className="fw-bold">Interest Rate</span>: {interestRate}%
      </p>
      <p>
        <span className="fw-bold">Interest Earnings</span>:{" "}
        {(
          initialValueIncome +
          mensalValueIncome -
          (initialValue + mensalValue * period * 12)
        ).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
      <p>
        <span className="fw-bold">Total Earnings</span>:{" "}
        {(initialValueIncome + mensalValueIncome).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button className="btn btn-danger" onClick={handleSetToggle}>
        Reset Calculator
      </button>
    </div>
  );
};

export default Result;
