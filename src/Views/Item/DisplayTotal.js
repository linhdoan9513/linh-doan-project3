import { getAllCategories } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";

const DisplayTotal = () => {
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

  let formattedDatabase = [];
  const pushValue = () => {
    Object.entries(category).map(([_, value]) => {
      return formattedDatabase.push(value);
    });
  };

  pushValue();

  let totalAmount = 0;
  const filterFunction = () => {
    if (formattedDatabase !== undefined) {
      for (let i = 0; i < formattedDatabase.length; i++) {
        totalAmount += formattedDatabase[i].amount;
      }
    }
    return totalAmount;
  };

  filterFunction();

  const filterCategory = (categoryName) => {
    return formattedDatabase.filter((eachCategory) => {
      return eachCategory.category === categoryName;
    });
  };

  console.log(filterCategory("Groceries"));

  return (
    <div>
      <p>Total spending: {totalAmount}</p>
      <DisplayItem list={formattedDatabase} />
    </div>
  );
};

export default DisplayTotal;
