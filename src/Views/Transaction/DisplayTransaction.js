import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../Models/CategoryModel";

const DisplayTransaction = ({ expense }) => {
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
    <div>
      <ul>
        {Object.entries(list).map((eachItem) => {
          return (
            <li key={eachItem[1][0]}>
              <p>
                {eachItem[1][1].expense} : {eachItem[1][1].amount}
              </p>
              <button onClick={handleClick} name={eachItem[1][0]}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayTransaction;
