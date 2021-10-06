import "./styles/scss/App.scss";
import money from "./assets/money.png";
import Expense from "./Views/Expense/Expense";
import Income from "./Views/Income/Income";
import { getData } from "./Models/CategoryModel";
import { useState, useEffect } from "react";
import { addFormat } from "./Views/CustomFunctions/addFormat";
import Summary from "./Summary";

const App = () => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);

  let sortedIncome = addFormat(income);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);

  const sortedExpense = addFormat(expense);

  return (
    <>
      <header className="wrapper">
        <h1>
          Budget Planner
          <span>
            <img className="logo" src={money} alt="wallet" />
          </span>
        </h1>
      </header>
      <main className="wrapper">
        <Summary expense={sortedExpense} income={sortedIncome} />
        <div className="individualSection">
          <Income income={sortedIncome} />
          <Expense expense={sortedExpense} />
        </div>
      </main>
    </>
  );
};

export default App;
