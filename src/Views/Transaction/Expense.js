import { getData } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";
import { addFormat } from "../CustomFunctions/addFormat";
import { runTotal } from "../CustomFunctions/runTotal";
import DisplayExpenseEntries from "./DisplayExpenseEntries";
import DisplayExpenseCategory from "./DisplayExpenseCategory";

const Expense = ({ allCategories }) => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);

  const sortedTransactions = addFormat(expense);
  const totalExpense = runTotal(sortedTransactions);

  return (
    <div className="expenseDisplay">
      <h2>Income By Category</h2>
      {/* <p>Total Expense: {totalExpense.toFixed(2)}</p> */}
      <DisplayExpenseCategory
        expense={sortedTransactions}
        list={allCategories}
      />
      <DisplayExpenseEntries expense={sortedTransactions} />
    </div>
  );
};

export default Expense;
