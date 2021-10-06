const runHashMap = (dbCategory, defaultCategory) => {
  const categoryTypes = defaultCategory;
  let categoryObject = {};

  const categoryTypeMap = () => {
    for (let i = 0; i < categoryTypes.length; i++) {
      categoryObject[categoryTypes[i]] = 0;
    }
    return categoryObject;
  };
  categoryTypeMap();

  const categoryAmountMap = () => {
    for (let i = 0; i < dbCategory.length; i++) {
      if (dbCategory[i][1].category in categoryObject) {
        categoryObject[dbCategory[i][1].category] += dbCategory[i][1].amount;
      }
    }
  };

  categoryAmountMap();
  return categoryObject;
};

export { runHashMap };
