import { useState, useEffect } from "react";

const DisplayItem = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (props.list !== undefined) {
      setList(props.list);
    }
  }, [props.list]);

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
