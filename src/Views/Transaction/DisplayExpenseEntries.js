import { deleteData, addTopData } from "../../Models/firebaseModel";

//Received expense as props from ExpenseList parent;
//Import DeleteData from firebaseModel to handle user choice to delete input and delete it from firebase database;

const DisplayExpenseEntries = ({ expense }) => {
  //Create a handleClick function to delete Item from database
  const handleClick = (e) => {
    //write condition so that when the expense object length have less than 1 item, add back the top parent category as 0 so it wont break the app. Here, the length is 2 instead of 1 because the parent node counted as 1.
    if (expense.length < 2) {
      console.log(expense.length);
      addTopData("expense/", 0);
      deleteData("expense/", e.target.name);
    } else {
      deleteData("expense/", e.target.name);
    }
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
                  -
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
