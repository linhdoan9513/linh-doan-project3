import { createCategory, getAllCategories } from "../Models/CategoryModel";
import { useState } from "react";

const Category = () => {
  //create a default category and push to firebase
  const defaultCategory = [
    "Groceries",
    "Utilities",
    "Shopping",
    "Dinning Out",
    "Cash",
    "Education",
    "Health",
    "Home",
    "Transportation",
  ];
  defaultCategory.forEach((category) => createCategory(category));

  return (
    <div>
      <form action="">
        <label htmlFor="category" className="sr-only">
          Select Category
        </label>
        <select type="select" name="category" id="category">
          {defaultCategory.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      <form onSubmit></form>
    </div>
  );
};

export default Category;
