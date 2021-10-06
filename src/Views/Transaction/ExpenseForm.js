import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import { addData } from "../../Models/CategoryModel";

const ExpenseForm = ({ categoryChoice }) => {
  let categoryName = categoryChoice;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((expenseName !== "", expenseValue !== "")) {
      addData("expense/", {
        category: categoryName,
        expense: expenseName,
        amount: parseFloat(expenseValue),
        date: selectedDate.toISOString(),
      });
    }
    setSelectedDate(new Date());
    setExpenseName("");
    setExpenseValue("");
    event.target.reset();
  };

  const handleChange = (event) => {
    setExpenseValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="expenseInput">
        <label htmlFor="expense">Daily Transaction: </label>
        <input
          type="text"
          name="expense"
          placeholder="Enter transaction"
          required
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <label htmlFor="email">Amount: </label>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          step="any"
          pattern="[0-9]*"
          required
          placeholder="Enter amount"
        />
      </div>
      <div className="date" onChange={handleChange}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
      <button type="submit">Add expense</button>
    </form>
  );
};

export default ExpenseForm;
