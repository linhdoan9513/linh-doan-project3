import { getData } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";
import useFormat from "../CustomHooks/useFormat";
import useTotal from "../CustomHooks/useTotal";
import DisplayTransaction from "../Transaction/DisplayTransaction";

const Expense = () => {
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
      <p>Total Expense: {totalExpense.toFixed(2)}</p>
      <DisplayTransaction expense={formattedDatabase} />
    </section>
  );
};

export default Expense;
