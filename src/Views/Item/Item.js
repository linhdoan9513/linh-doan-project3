import ItemForm from "./ItemForm";

const Item = (props) => {
  return (
    <section className="itemSection">
      <h2>Item Section</h2>
      <ItemForm categoryChoice={props.categoryChoice} />
    </section>
  );
};

export default Item;
