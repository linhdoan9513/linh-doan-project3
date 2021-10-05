import useTotal from "../CustomHooks/useTotal";
import useHashMap from "../CustomHooks/useHashMap";

const DisplayIncome = ({ income, list }) => {
  let incomeArray = income;
  let totalIncome = useTotal(incomeArray);
  let incomeObject = useHashMap(income, list);

  console.log(incomeObject);

  return (
    <div>
      <p>Total Income: {totalIncome} </p>
      <ul>
        {Object.entries(incomeObject).map((eachIncome) => {
          return (
            <li key={eachIncome[0]}>
              <p>
                {eachIncome[0]} : {eachIncome[1]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayIncome;
