import DisplayItem from "./DisplayItem";

const DisplayTotal = (props) => {
  const allData = props.data;
  const allCategories = props.allCategories;

  let totalAmount = 0;
  const filterFunction = () => {
    if (allData !== undefined) {
      for (let i = 0; i < allData.length; i++) {
        totalAmount += allData[i].amount;
      }
    }
    return totalAmount;
  };

  filterFunction();

  const filterCategory = (categoryName) => {
    return allData.filter((eachCategory) => {
      return eachCategory.category === categoryName;
    });
  };

  return (
    <div>
      <p>Total spending: {totalAmount}</p>
      <DisplayItem list={allData} />
    </div>
  );
};

export default DisplayTotal;
