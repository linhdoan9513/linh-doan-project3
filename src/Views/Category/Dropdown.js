import { defaultCategory } from "./defaultCategory";
import { addCategory, getAllCategories } from "../../Models/CategoryModel";
import { useState, useEffect } from "react";

const Dropdown = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [value, setValue] = useState("default");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  defaultCategory.forEach((category) => addCategory(category));

  const displayCategory = () => {
    getAllCategories((snapshot) => {
      const data = snapshot.val();
      console.log(snapshot);
      setAllCategories(data);
    });
  };

  useEffect(() => displayCategory(), []);

  return (
    <form>
      <label htmlFor="category" className="sr-only">
        Select Category
      </label>
      <select
        defaultValue={value}
        onChange={handleChange}
        type="select"
        name="category"
        id="category"
      >
        <option value="default" disabled>
          Choose a category
        </option>
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
