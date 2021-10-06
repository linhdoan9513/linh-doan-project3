import { runTotal } from "../CustomFunctions/runTotal";
import { runHashMap } from "../CustomFunctions/runHashMap";
import money from "../../assets/money.png";

const DisplayIncomeCategory = ({ income, list }) => {
  let incomeArray = income;
  let totalIncome = runTotal(incomeArray);
  let incomeObject = runHashMap(income, list);

  return (
    <div className="incomeDisplay">
      <h3>Income by Category </h3>
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
