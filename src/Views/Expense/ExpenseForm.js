import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import { addData } from "../../Models/firebaseModel";

//Create Form component to capture userInput and add to Firebase database
//Import higher level function from Model Folder to add data to Firebase.
//DatePicker is a library installed from npm to create a date object and user can select and push into Firebase along with other information

// categoryChoice is prop passed from expense list component so when user can select the expense category and add individual transaction, this helps to keep track the total amount of each categories.
const ExpenseForm = ({ user, categoryChoice }) => {
  let categoryName = categoryChoice;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Add Data is a high level function generated from firebaseModel to take userInput and pass to Firebase database
    if ((expenseName !== "", expenseValue !== "")) {
      addData(`${user.uid}/expense/`, {
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
    <form className="expenseInput" onSubmit={handleSubmit}>
      <div className="expenseContainer">
        <div>
          <label htmlFor="expense">Daily Transaction: </label>
          <input
            type="text"
            name="expense"
            placeholder="Enter transaction"
            required
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </div>
        <div>
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
      </div>
      <div className="date" onChange={handleChange}>
        {/* Datepicker is the npm package for user to select date */}
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
