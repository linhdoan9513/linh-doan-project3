import { useState } from "react";
import IncomeForm from "./IncomeForm";
import IncomeCategory from "./IncomeCategory";
import IncomeEntries from "./IncomeEntries";
import IncomeCategorySelection from "./IncomeCategorySelection";

//IncomeList is the parent component for IncomeForm, IncomeEntries and IncomeCategory
//IncomeList received income object as props from Income Parent and passed to 2 display components

const IncomeList = ({ income }) => {
  const [selectedCategory, setSelectedCategory] = useState("default");
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
        <IncomeCategorySelection
          defaultIncome={defaultIncome}
          onCategorySelection={(e) => setSelectedCategory(e.target.value)}
        ></IncomeCategorySelection>
        <IncomeForm choice={selectedCategory} />
      </div>
      <IncomeCategory income={income} categories={defaultIncome} />
      <IncomeEntries income={income} />
    </>
  );
};

export default IncomeList;
