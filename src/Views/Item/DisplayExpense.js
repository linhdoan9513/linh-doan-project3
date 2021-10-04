import DisplayItem from "./DisplayItem";
import useTotal from "../CustomHooks/useTotal";

const DisplayTotal = (props) => {
  const allExpense = props.data;
  let totalExpense = useTotal(allExpense);

  // const filterCategory = (categoryName) => {
  //   return allData.filter((eachCategory) => {
  //     return eachCategory.category === categoryName;
  //   });
  // };

  return (
    <div>
      <p>Total spending: {totalExpense}</p>
      <DisplayItem list={allExpense} />
    </div>
  );
};

export default DisplayTotal;
