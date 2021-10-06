import { runTotal } from "./Views/CustomFunctions/runTotal";
const Summary = ({ expense, income }) => {
  const totalIncome = runTotal(income);
  const totalExpense = runTotal(expense);
  return (
    <section className="summarySection">
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expense: ${totalExpense.toFixed(2)}</p>
      <p>Total Remaining: ${(totalIncome - totalExpense).toFixed(2)}</p>
    </section>
  );
};

export default Summary;
