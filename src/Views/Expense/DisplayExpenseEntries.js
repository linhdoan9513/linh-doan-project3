import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../Models/CategoryModel";

const DisplayExpenseEntries = ({ expense }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (expense !== undefined) {
      setList(expense);
    }
  }, [expense]);

  const handleClick = (e) => {
    deleteData("expense/", e.target.name);
  };

  return (
    <div className="expenseEntries">
      <h3>Expense By Date</h3>
      <ul>
        {Object.entries(list).map((eachItem) => {
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
