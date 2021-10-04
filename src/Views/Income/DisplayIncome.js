import useTotal from "../CustomHooks/useTotal";
import useHashMap from "../CustomHooks/useHashMap";

const DisplayIncome = (props) => {
  let incomeArray = props.income;
  let totalIncome = useTotal(incomeArray);
  let incomeObject = useHashMap(incomeArray, props.list);

  return (
    <div>
      <p>Total Income: {totalIncome} </p>
    </div>
  );
};

export default DisplayIncome;
