import { useState, useEffect } from "react";

const DisplayIncomeEntries = ({ income }) => {
  const [incomeEntries, setIncomeEntries] = useState([]);

  useEffect(() => {
    if (income.length > 0) {
      setIncomeEntries(income);
    }
  }, [income]);

  return (
    <div className="incomeEntries">
      <h3>Income By Date</h3>
      <ul>
        {Object.entries(incomeEntries).map((eachItem) => {
          const date = new Date(eachItem[1][1].date).toDateString();
          return (
            <li key={eachItem[1][0]}>
              <div>
                <p>{eachItem[1][1].category}</p>
                <p className="date">Date: {date}</p>
              </div>
              <p className="amount">$ {eachItem[1][1].amount}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayIncomeEntries;
