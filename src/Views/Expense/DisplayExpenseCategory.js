import { runHashMap } from "../CustomFunctions/runHashMap";
import money from "../../assets/money.png";

const DisplayExpenseCategory = ({ expense, list }) => {
  const expenseObject = runHashMap(expense, list);

  return (
    <div className="expenseCategory">
      <ul>
        {Object.entries(expenseObject).map((eachExpense) => {
          return (
            <li key={eachExpense[0]}>
              <p className="circle">
                <img className="logo" src={money} alt="wallet" />
              </p>
              <p>{eachExpense[0]}</p>
              <p>${eachExpense[1]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayExpenseCategory;
