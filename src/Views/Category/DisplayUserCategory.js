// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DisplayUserCategory = (props) => {
  return (
    <ul>
      {props.category.map((eachCategory) => {
        return (
          <li key={eachCategory}>
            <p>{eachCategory}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default DisplayUserCategory;
