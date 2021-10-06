import { deleteData, addTopData } from "../../Models/firebaseModel";

//Received income as props from IncomeList parent;
//Import DeleteData from firebaseModel to handle user choice to delete input and delete it from firebase database;

const DisplayIncomeEntries = ({ income }) => {
  //write condition so that when the expense object length have less than 1 item, add back the top parent category as 0 so it wont break the app. Here, the length is 2 instead of 1 because the parent node counted as 1.
  const handleClick = (e) => {
    if (income.length < 2) {
      addTopData("income/", 0);
      deleteData("income/", e.target.name);
    } else {
      deleteData("income/", e.target.name);
    }
  };

  return (
    <div className="incomeEntries">
      <h3>Income By Date</h3>
      <ul>
        {Object.entries(income).map((eachItem) => {
          const date = new Date(eachItem[1][1].date).toDateString();
          return (
            <li key={eachItem[1][0]}>
              <div className="incomeTitle">
                <p>{eachItem[1][1].category}</p>
                <p className="date">Date: {date}</p>
              </div>
              <div className="incomeAmount">
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

export default DisplayIncomeEntries;
