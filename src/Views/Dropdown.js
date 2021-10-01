import { defaultCategory } from "./defaultCategory";
import { addCategory, getAllCategories } from "../Models/CategoryModel";
import { useState, useEffect } from "react";

const Dropdown = () => {
  const [allCategories, setAllCategories] = useState([]);

  defaultCategory.forEach((category) => addCategory(category));

  const displayCategory = () => {
    getAllCategories((snapshot) => {
      const data = snapshot.val();
      setAllCategories(data);
    });
  };

  useEffect(() => displayCategory(), []);

  return (
    <form>
      <label htmlFor="category" className="sr-only">
        Select Category
      </label>
      <select type="select" name="category" id="category">
        {Object.entries(allCategories).map(([eachCategory, _]) => {
          return (
            <option value={eachCategory} key={eachCategory}>
              {eachCategory}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Dropdown;
