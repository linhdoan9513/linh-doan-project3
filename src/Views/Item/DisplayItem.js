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
    Object.entries(category).map(([_, value]) => {
      return total.push(value);
    });
  };

  pushValue();

  let totalAmount = 0;
  const filterFunction = () => {
    if (total !== undefined) {
      for (let i = 0; i < total.length; i++) {
        totalAmount += total[i].amount;
      }
    }
    return totalAmount;
  };

  filterFunction();

  const filterCategory = (categoryName) => {
    return total.filter((eachCategory) => {
      return eachCategory.category === categoryName;
    });
  };

  console.log(filterCategory("Groceries"));

  return (
    <div>
      <p>Total spending: {totalAmount}</p>
      <ul>
        {total.map((eachItem) => {
          return (
            <li key={eachItem.item}>
              <p>
                {eachItem.item} : {eachItem.amount}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayItem;
