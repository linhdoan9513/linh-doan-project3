import { getData } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";
import { addFormat } from "../CustomFunctions/addFormat";
import { runTotal } from "../CustomFunctions/runTotal";
import DisplayTransaction from "../Transaction/DisplayTransaction";

const Expense = () => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);

  let sortedTransactions = addFormat(expense);
  let totalExpense = runTotal(sortedTransactions);
  if (sortedTransactions.length > 0) {
    var date = new Date(sortedTransactions[0][1].date);
    console.log(date.toDateString());
  }
  return (
    <section className="itemSection">
      <p>Total Expense: {totalExpense.toFixed(2)}</p>
      <p></p>
      <DisplayTransaction expense={sortedTransactions} />
    </section>
  );
};

export default Expense;
