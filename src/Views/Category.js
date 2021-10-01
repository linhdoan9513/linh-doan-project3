import { addCategory } from "../Models/CategoryModel";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Category = () => {
  const [userInput, setUserInput] = useState("");
  const [displayInput, setDisplayInput] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    addCategory(userInput);
    setUserInput(" ");
  };

  return (
    <div>
      <Dropdown />
      <form>
        <label htmlFor="newCategory" onSubmit={handleClick}>
          Add Category
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button onClick={handleClick}>Add Category</button>
      </form>
    </div>
  );
};

export default Category;
