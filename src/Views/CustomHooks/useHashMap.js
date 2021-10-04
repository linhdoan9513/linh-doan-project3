import { useState, useEffect } from "react";

const useHashMap = (dbCategory, defaultCategory) => {
  let array = dbCategory;
  const [data, setData] = useState([]);

  const categoryTypes = defaultCategory;
  let categoryObject = {};

  useEffect(() => {
    if (array !== undefined) {
      setData(array);
    }
  }, [array]);

  const categoryTypeMap = () => {
    for (let i = 0; i < categoryTypes.length; i++) {
      categoryObject[categoryTypes[i]] = 0;
    }
    return categoryObject;
  };

  categoryTypeMap();
  const categoryAmountMap = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].category in categoryObject) {
        categoryObject[data[i].category] += data[i].amount;
      }
    }
  };
  categoryAmountMap();
  return categoryObject;
};

export default useHashMap;
