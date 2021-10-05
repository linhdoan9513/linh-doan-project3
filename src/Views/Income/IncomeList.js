import { useState } from "react";
import IncomeForm from "./IncomeForm";
import DisplayIncome from "./DisplayIncome";

const IncomeList = (props) => {
  const [value, setValue] = useState("default");
  const defaultIncome = [
    "Employment Income",
    "Investment Income",
    "Rental Income",
    "Retirement Income",
    "Other Income",
  ];

  return (
    <>
      <form>
        <label htmlFor="category" className="sr-only">
          Select Category
        </label>
        <select
          defaultValue={value}
          onChange={(e) => setValue(e.target.value)}
          type="select"
          name="category"
          id="category"
        >
          <option value="default" disabled>
            Choose a category
          </option>
          {defaultIncome.sort().map((eachIncome) => {
            return (
              <option value={eachIncome} key={eachIncome}>
                {eachIncome}
              </option>
            );
          })}
        </select>
      </form>
      <IncomeForm choice={value} />
      <DisplayIncome income={props.income} list={defaultIncome} />
    </>
  );
};

export default IncomeList;