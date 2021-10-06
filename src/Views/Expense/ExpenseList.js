import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import DisplayExpenseEntries from "./DisplayExpenseEntries";
import DisplayExpenseCategory from "./DisplayExpenseCategory";

const ExpenseList = ({ expense }) => {
  const [value, setValue] = useState("default");
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
      <h3>Income By Category</h3>
      <DisplayExpenseCategory expense={expense} list={defaultCategory} />
      <div className="expenseDisplay">
        <DisplayExpenseEntries expense={expense} />
      </div>
    </div>
  );
};

export default ExpenseList;
