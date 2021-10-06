import ExpenseList from "./ExpenseList";

const Expense = ({ expense }) => {
  return (
    <section className="expenseSection">
      <h2>Expense</h2>
      <div className="expenseInput">
        <ExpenseList expense={expense} />
      </div>
    </section>
  );
};

export default Expense;
