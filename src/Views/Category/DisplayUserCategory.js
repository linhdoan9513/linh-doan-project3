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
