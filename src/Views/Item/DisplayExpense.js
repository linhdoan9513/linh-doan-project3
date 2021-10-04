import DisplayItem from "./DisplayItem";
import useTotal from "../CustomHooks/useTotal";

const DisplayTotal = (props) => {
  const allData = props.data;
  let totalExpense = useTotal(allData);

  // const filterCategory = (categoryName) => {
  //   return allData.filter((eachCategory) => {
  //     return eachCategory.category === categoryName;
  //   });
  // };

  return (
    <div>
      <p>Total spending: {totalExpense}</p>
      <DisplayItem list={allData} />
    </div>
  );
};

export default DisplayTotal;
