import { createItem, deleteItem, getItem } from "../Models/ItemModel";
import { useState, useEffect } from "react";

const Item = () => {
  const [itemValue, setItemValue] = useState(0);

  createItem("grocery", "chicken", 10);

  const displayItem = () => {
    getItem("grocery", "chicken", (snapshot) => {
      setItemValue(snapshot.val());
    });
  };

  useEffect(() => displayItem());

  return <div>{itemValue}</div>;
};

export default Item;
