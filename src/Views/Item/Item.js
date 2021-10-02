import { createItem, deleteItem, getItem } from "../Models/ItemModel";
import { useState, useEffect } from "react";

const Item = (props) => {
  const [itemValue, setItemValue] = useState(0);
  const value = { itemValue, ...props.date };

  // const displayItem = () => {
  //   getItem("grocery", "chicken", (snapshot) => {
  //     setItemValue(snapshot.val());
  //   });
  // };

  // useEffect(() => displayItem());

  return <div>{itemValue}</div>;
};

export default Item;
