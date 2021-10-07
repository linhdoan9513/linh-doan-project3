import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseCategorySelection from "./ExpenseCategorySelection";
import ExpenseEntries from "./ExpenseEntries";
import ExpenseCategory from "./ExpenseCategory";

//ExpenseList is the parent component for ExpenseForm, ExpenseEntries and ExpenseCategory
//ExpenseList received expense object as props from Expense Parent and passed to 2 display component

const ExpenseList = ({ expense }) => {
  const [selectedCategory, setSelectedCategory] = useState("default");

  //Create default category so user can add individual transaction to the appropriate category and also to generate dropdown menu of all categories option
  const defaultCategories = [
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
      <ExpenseCategorySelection
        defaultCategories={defaultCategories}
        onCategorySelection={(e) => setSelectedCategory(e.target.value)}
      ></ExpenseCategorySelection>
      <ExpenseForm categoryChoice={selectedCategory} />
      <ExpenseCategory expense={expense} list={defaultCategories} />
      <ExpenseEntries expense={expense} />
    </div>
  );
};

export default ExpenseList;
