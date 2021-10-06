import "./styles/scss/App.scss";
import money from "./assets/money.png";
import Expense from "./Views/Expense/Expense";
import Income from "./Views/Income/Income";
import { getData } from "./Models/CategoryModel";
import { useState, useEffect } from "react";
import { addFormat } from "./Views/CustomFunctions/addFormat";

const App = () => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);

  let formattedDatabase = addFormat(income);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);

  const sortedTransactions = addFormat(expense);

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
        <div className="individualSection">
          <Income income={formattedDatabase} />
          <Expense expense={sortedTransactions} />
        </div>
        <div className="pieChart"></div>
      </main>
    </>
  );
};

export default App;
