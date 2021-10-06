import { useState } from "react";
import { addData } from "../../Models/CategoryModel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

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
