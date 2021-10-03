import ItemForm from "./ItemForm";
import DisplayItem from "./DisplayItem";

const Item = (props) => {
  return (
    <section className="itemSection">
      <ItemForm categoryChoice={props.categoryChoice} />
      <DisplayItem allItems={props.allCategories} />
    </section>
  );
};

export default Item;
