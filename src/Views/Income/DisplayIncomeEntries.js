import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../Models/CategoryModel";

const DisplayIncomeEntries = ({ income }) => {
  const [incomeEntries, setIncomeEntries] = useState([]);

  useEffect(() => {
    if (income.length > 0) {
      setIncomeEntries(income);
    }
  }, [income]);

  const handleClick = (e) => {
    deleteData("income/", e.target.name);
  };

  return (
    <div className="incomeEntries">
      <h3>Income By Date</h3>
      <ul>
        {Object.entries(incomeEntries).map((eachItem) => {
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

export default DisplayIncomeEntries;
