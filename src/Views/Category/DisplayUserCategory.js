import { deleteCategory } from "../../Models/CategoryModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DisplayUserCategory = (props) => {
  const handleClick = (e) => {
    console.log(`running`, e.target.name);
    deleteCategory(e.target.name);
  };

  return (
    <ul>
      {Object.entries(props.category).map(([eachCategory, _]) => {
        return (
          <li key={eachCategory}>
            <p>{eachCategory}</p>
            <button name={eachCategory} onClick={handleClick}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayUserCategory;
