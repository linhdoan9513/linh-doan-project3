import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteData } from "../../Models/CategoryModel";

const DisplayTransaction = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (props.expense !== undefined) {
      setList(props.expense);
    }
  }, [props.expense]);

  const handleClick = (e) => {
    deleteData("expense/", e.target.name);
  };

  return (
    <div>
      <ul>
        {Object.entries(list).map((eachItem) => {
          console.log(eachItem);
          return (
            <li key={eachItem[0]}>
              <p>
                {eachItem[1].expense} : {eachItem[1].amount}
              </p>
              <button onClick={handleClick} name={eachItem[0]}>
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
