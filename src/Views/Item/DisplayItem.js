const DisplayItem = (props) => {
  const list = props.list;
  return (
    <div>
      <ul>
        {list.map((eachItem) => {
          return (
            <li key={eachItem.item}>
              <p>
                {eachItem.item} : {eachItem.amount}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DisplayItem;
