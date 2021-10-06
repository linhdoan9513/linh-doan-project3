import useTotal from "../CustomHooks/useTotal";
import useHashMap from "../CustomHooks/useHashMap";
import money from "../../assets/money.png";

const DisplayIncomeCategory = ({ income, list }) => {
  let incomeArray = income;
  let totalIncome = useTotal(incomeArray);
  let incomeObject = useHashMap(income, list);

  return (
    <div className="incomeDisplay">
      <p>Total Income: {totalIncome} </p>
      <h2>Income by Category </h2>
      <ul className="incomeCategory">
        {Object.entries(incomeObject).map((eachIncome) => {
          return (
            <li key={eachIncome[0]}>
              <p className="circle">
                <img className="logo" src={money} alt="wallet" />
              </p>
              <p>{eachIncome[0]}</p>
              <p>${eachIncome[1]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayIncomeCategory;
