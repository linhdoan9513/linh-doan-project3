import { useState } from "react";
// import DisplayCategory from "./DisplayUserCategory";
import Expense from "../Transaction/Expense";

const Category = (props) => {
  const [value, setValue] = useState("default");
  // const [userCategories, setUserCategories] = useState([]);
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
      {/* <button onClick={() => setDisplayInput(!displayInput)}>+</button>
      {displayInput ? <AddUserCategory /> : null} */}
      {/* <DisplayCategory category={defaultCategory} /> */}
      <form>
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
      <Expense categoryChoice={value} allCategories={defaultCategory.sort()} />
    </section>
  );
};

export default Category;
