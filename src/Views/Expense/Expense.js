import ExpenseList from "./ExpenseList";

//Receive expense as props from App and passed to children components
//Expense Component as the top Parent of Expense category
//Generate ExpenseList as direct child component and pass expense object aka firebase data

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
