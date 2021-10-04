import { useState } from "react";
import { addFunction } from "../../Models/CategoryModel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

const IncomeForm = () => {
  return (
    <div className="incomeForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Amount</label>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          step="any"
          pattern="[0-9]*"
          required
          placeholder="Enter amount"
        />
        <div className="date" onChange={handleChange}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;
