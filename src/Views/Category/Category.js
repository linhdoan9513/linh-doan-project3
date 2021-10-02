import Dropdown from "./Dropdown";
import AddCategory from "./AddCategory";
import { useState } from "react";

const Category = () => {
  const [displayInput, setDisplayInput] = useState(false);

  return (
    <div>
      <Dropdown />
      <button onClick={() => setDisplayInput(!displayInput)}>+</button>
      {displayInput ? <AddCategory /> : null}
    </div>
  );
};

export default Category;
