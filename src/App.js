import "./styles/scss/App.scss";
import money from "./assets/money.png";
import Expense from "./Views/Transaction/Expense";
import Income from "./Views/Income/Income";
import { getData } from "./Models/firebaseModel";
import { useState, useEffect } from "react";
import { addFormat } from "./Views/CustomFunctions/addFormat";
import Summary from "./Summary";

//Import getData function from firebaseModel to get allData from firebase database for both expense and income

const App = () => {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("income/", (snapshot) => {
      const data = snapshot.val();
      setIncome(data);
    });
  }, []);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);

  const sortedExpense = addFormat(expense);
  let sortedIncome = addFormat(income);

  return (
    <>
      <header className="wrapper">
        <h1>
          Personal Wallet
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
        <footer>Created at Juno College of Technology by Linh Doan</footer>
      </main>
    </>
  );
};

export default App;
