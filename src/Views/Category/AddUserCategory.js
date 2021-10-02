import { addUserCategory } from "../../Models/CategoryModel";
import { useState } from "react";

const AddUserCategory = () => {
  const [userInput, setUserInput] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    if (userInput) {
      addUserCategory(userInput);
    } else {
      alert("please enter sth");
    }
    setUserInput(" ");
  };

  return (
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
  );
};

export default AddUserCategory;
