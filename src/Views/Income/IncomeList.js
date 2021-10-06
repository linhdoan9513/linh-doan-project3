import { useState } from "react";
import IncomeForm from "./IncomeForm";
import IncomeCategory from "./IncomeCategory";
import IncomeEntries from "./IncomeEntries";

//IncomeList is the parent component for IncomeForm, IncomeEntries and IncomeCategory
//IncomeList received income object as props from Income Parent and passed to 2 display components

const IncomeList = ({ income }) => {
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
      <div className="incomeInput">
        <form className="dropdown">
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
      </div>
      <IncomeCategory income={income} list={defaultIncome} />
      <IncomeEntries income={income} />
    </>
  );
};

export default IncomeList;
