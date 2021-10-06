import { useState } from "react";
import Expense from "./Expense";
import ExpenseForm from "./ExpenseForm";

const DefaultExpenseCategory = ({ categoryChoice }) => {
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
    <section className="expenseSection">
      <h2>Expense</h2>
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
      </div>
      <Expense categoryChoice={value} allCategories={defaultCategory.sort()} />
    </section>
  );
};

export default DefaultExpenseCategory;
