import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import { addFunction } from "../../Models/CategoryModel";

const ItemForm = (props) => {
  let categoryName = props.categoryChoice;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [itemName, setItemName] = useState("");
  const [itemValue, setItemValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((itemName !== "", itemValue !== "")) {
      addFunction("expense/", {
        category: categoryName,
        item: itemName,
        amount: parseFloat(itemValue),
        date: selectedDate.toISOString(),
      });
    } else {
      alert("please enter sth");
    }
    setSelectedDate(new Date());
    setItemName("");
    setItemValue("");
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
          placeholder="Enter transaction"
          required
          onChange={(e) => setItemName(e.target.value)}
        />
        <label htmlFor="email">Amount</label>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
          step="any"
          pattern="[0-9]*"
          required
          placeholder="Enter amount"
        />
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
