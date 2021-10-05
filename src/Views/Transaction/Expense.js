import ExpenseForm from "./ExpenseForm";
import { getData } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";
import useFormat from "../CustomHooks/useFormat";
import useTotal from "../CustomHooks/useTotal";
import DisplayTransaction from "../Transaction/DisplayTransaction";

const Expense = (props) => {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setExpense(data);
    });
  }, []);

  let formattedDatabase = useFormat(expense);
  let totalExpense = useTotal(formattedDatabase);

  return (
    <section className="itemSection">
      <ExpenseForm categoryChoice={props.categoryChoice} />
      <DisplayTransaction expense={expense} />{" "}
      <p>Total Expense: {totalExpense.toFixed(2)}</p>
    </section>
  );
};

export default Expense;
