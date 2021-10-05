import useTotal from "../CustomHooks/useTotal";
import useHashMap from "../CustomHooks/useHashMap";

const DisplayIncome = ({ income, list }) => {
  let incomeArray = income;
  let totalIncome = useTotal(incomeArray);
  let incomeObject = useHashMap(income, list);

  console.log(incomeObject);

  return (
    <div className="incomeDisplay">
      <p>Total Income: {totalIncome} </p>
      <ul className="incomeCategory">
        {Object.entries(incomeObject).map((eachIncome) => {
          return (
            <li key={eachIncome[0]}>
              <p className="circle"></p>
              <p>{eachIncome[0]}</p>
              <p> {eachIncome[1]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayIncome;
