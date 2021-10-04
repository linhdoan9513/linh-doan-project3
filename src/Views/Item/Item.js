import ItemForm from "./ItemForm";
import DisplayExpense from "./DisplayExpense";
import DisplayItem from "./DisplayItem";
import { getData } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";

const Item = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setCategory(data);
    });
  }, []);

  let formattedDatabase = [];
  const pushValue = () => {
    Object.entries(category).map(([_, value]) => {
      return formattedDatabase.push(value);
    });
  };

  pushValue();

  return (
    <section className="itemSection">
      <ItemForm categoryChoice={props.categoryChoice} />
      <DisplayExpense
        allCategories={props.allCategories}
        data={formattedDatabase}
      />
      <DisplayItem />
    </section>
  );
};

export default Item;
