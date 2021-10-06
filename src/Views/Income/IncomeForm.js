import { useState } from "react";
import { addData } from "../../Models/firebaseModel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

//Create Form component to capture userInput and add to Firebase database
//Import higher level function from Model Folder to add data to Firebase aka addData
//DatePicker is a library installed from npm to create a date object and user can select and push into Firebase along with other information

// Choice is prop passed from income list component so when user can select the income category and add individual transaction, this helps to keep track the total amount of each categories.
const IncomeForm = ({ choice }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [incomeValue, setIncomeValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (incomeValue !== "") {
      addData("income/", {
        category: choice,
        amount: parseFloat(incomeValue),
        date: selectedDate.toISOString(),
      });
    }
    setSelectedDate(new Date());
    setIncomeValue("");
    event.target.reset();
  };

  return (
    <form className="incomeForm" onSubmit={handleSubmit}>
      <label htmlFor="income">Income: </label>
      <input
        type="number"
        name="amount"
        step="any"
        pattern="[0-9]*"
        required
        placeholder="Enter Income"
        onChange={(e) => setIncomeValue(e.target.value)}
      />
      <div className="date" onChange={(e) => setIncomeValue(e.target.value)}>
        {/* Datepicker is the npm package for user to select date */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </div>
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
