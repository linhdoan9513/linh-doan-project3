import ItemForm from "./ItemForm";
import DisplayExpense from "./DisplayExpense";
import { getData } from "../../Models/CategoryModel";
import { useEffect, useState } from "react";
import useFormat from "../CustomHooks/useFormat";

const Item = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getData("expense/", (snapshot) => {
      const data = snapshot.val();
      setCategory(data);
    });
  }, []);

  let formattedDatabase = useFormat(category);

  return (
    <section className="itemSection">
      <ItemForm categoryChoice={props.categoryChoice} />
      <DisplayExpense
        allCategories={props.allCategories}
        data={formattedDatabase}
      />
    </section>
  );
};

export default Item;
