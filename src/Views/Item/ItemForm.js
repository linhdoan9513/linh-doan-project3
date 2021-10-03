import { createItem } from "../../Models/ItemModel";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

const ItemForm = (props) => {
  let categoryName = props.categoryChoice;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [itemName, setItemName] = useState("");
  const [itemValue, setItemValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((itemName !== "", itemValue !== "")) {
      createItem(categoryName, itemName, {
        amount: parseInt(itemValue, 10),
        date: selectedDate.toISOString(),
      });
      console.log(`sent form`);
    } else {
      alert("please enter sth");
    }
    event.target.reset();
  };

  const handleChange = (event) => {
    setItemValue(event.target.value);
  };

  return (
    <div className="itemForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item</label>
        <input
          type="text"
          name="item"
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="email">Amount</label>
        <input type="number" name="amount" onChange={handleChange} />
        <div className="date" onChange={handleChange}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default ItemForm;
