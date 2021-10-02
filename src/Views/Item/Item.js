import { createItem, deleteItem, getItem } from "../../Models/ItemModel";
import { useState, useEffect } from "react";

const Item = (props) => {
  console.log(props);

  const [userInput, setUserInput] = useState("");

  //  const handleClick = (event) => {
  //    event.preventDefault();
  //    if (userInput) {
  //      createItem(props.category, )
  //    } else {
  //      alert("please enter sth");
  //    }
  //    setUserInput(" ");
  //  };

  return (
    <div>
      {" "}
      <form>
        <label htmlFor="newItem">
          Add Item
          <input
            type="text"
            value={userInput}
            // onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default Item;
