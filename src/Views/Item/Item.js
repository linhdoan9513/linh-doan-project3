import ItemForm from "./ItemForm";
import DisplayTotal from "./DisplayTotal";
import DisplayItem from "./DisplayItem";
import { getAllCategories } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";

const Item = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getAllCategories((snapshot) => {
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
      <DisplayTotal
        allCategories={props.allCategories}
        data={formattedDatabase}
      />
      <DisplayItem />
    </section>
  );
};

export default Item;
