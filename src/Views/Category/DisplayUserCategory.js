const DisplayUserCategory = ({ category }) => {
  return (
    <ul>
      {category.map((eachCategory) => {
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
