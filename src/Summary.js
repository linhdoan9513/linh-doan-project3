import { runTotal } from "./Views/CustomFunctions/runTotal";
const Summary = ({ expense, income }) => {
  const totalIncome = runTotal(income);
  const totalExpense = runTotal(expense);
  return (
    <section className="summarySection">
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expense: ${totalExpense}</p>
      <p>Total Remaining: ${totalIncome - totalExpense}</p>
    </section>
  );
};

export default Summary;
