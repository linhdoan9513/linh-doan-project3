import ItemForm from "./ItemForm";
import DisplayTotal from "./DisplayTotal";

const Item = (props) => {
  return (
    <section className="itemSection">
      <ItemForm categoryChoice={props.categoryChoice} />
      <DisplayTotal />
    </section>
  );
};

export default Item;
