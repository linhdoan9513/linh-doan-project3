import { getAllCategories } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";

const DisplayItem = (props) => {
  const [category, setCategory] = useState([]);
  const displayCategory = () => {
    getAllCategories((snapshot) => {
      const data = snapshot.val();
      setCategory(data);
    });
  };

  useEffect(() => {
    displayCategory();
  }, []);

  let total = [];

  const pushValue = () => {
    Object.entries(category).map(([eachExpense, value]) => {
      total.push(value);
    });
    return total;
  };

  pushValue();

  return <ul></ul>;
};

export default DisplayItem;
