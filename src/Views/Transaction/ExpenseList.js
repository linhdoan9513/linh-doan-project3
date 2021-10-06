import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import DisplayExpenseEntries from "./DisplayExpenseEntries";
import DisplayExpenseCategory from "./DisplayExpenseCategory";

//ExpenseList is the parent component for ExpenseForm, DisplayExpenseEntries and DisplayExpenseCategory
//ExpenseList received expense object as props from Expense Parent and passed to 2 display component

const ExpenseList = ({ expense }) => {
  const [value, setValue] = useState("default");

  //Create default category so user can add individual transaction to the appropriate category and also to generate dropdown menu of all categories option
  const defaultCategory = [
    "Groceries",
    "Utilities",
    "Shopping",
    "Dinning Out",
    "Cash",
    "Education",
    "Health",
    "House Hold",
    "Transportation",
  ];

  return (
    <div className="expenseInput">
      <form className="expenseDropdown">
        <label htmlFor="category" className="sr-only">
          Select Category
        </label>
        <select
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          type="select"
          name="category"
          className="category"
          id="category"
        >
          <option value="default" disabled>
            Choose a category
          </option>
          {defaultCategory.sort().map((eachCategory) => {
            return (
              <option value={eachCategory} key={eachCategory}>
                {eachCategory}
              </option>
            );
          })}
        </select>
      </form>
      <ExpenseForm categoryChoice={value} />
      <DisplayExpenseCategory expense={expense} list={defaultCategory} />
      <DisplayExpenseEntries expense={expense} />
    </div>
  );
};

export default ExpenseList;
