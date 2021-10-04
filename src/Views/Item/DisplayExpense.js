import DisplayItem from "./DisplayItem";
import useTotal from "../CustomHooks/useTotal";
import useHashMap from "../CustomHooks/useHashMap";

const DisplayTotal = (props) => {
  const allExpense = props.data;
  let totalExpense = useTotal(allExpense);
  let expenseObject = useHashMap(props.data, props.allCategories);

  console.log(expenseObject);
  return (
    <div>
      <p>Total spending: {totalExpense}</p>
      <DisplayItem list={allExpense} />
    </div>
  );
};

export default DisplayTotal;
