import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../Models/firebaseModel";

//Received expense as props from ExpenseList parent;
//Import DeleteData from firebaseModel to handle user choice to delete input and delete it from firebase database;

const DisplayExpenseEntries = ({ expense }) => {
  const handleClick = (e) => {
    deleteData("expense/", e.target.name);
  };

  return (
    <div className="expenseEntries">
      <h3>Expense By Date</h3>
      {/* Use map to loop through expense object and render all expense transaction by date from most recent to oldest transaction */}
      <ul>
        {Object.entries(expense).map((eachItem) => {
          const date = new Date(eachItem[1][1].date).toDateString();
          return (
            <li key={eachItem[1][0]}>
              <div className="expenseTitle">
                <p>{eachItem[1][1].expense}</p>
                <p className="date">Date: {date}</p>
              </div>
              <div className="expenseAmount">
                <p className="amount">$ {eachItem[1][1].amount}</p>
                <button onClick={handleClick} name={eachItem[1][0]}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayExpenseEntries;
