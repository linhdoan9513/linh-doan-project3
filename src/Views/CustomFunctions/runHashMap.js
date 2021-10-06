//Create a higher level function to create an object that store the total amount of each category from the database of category to display in Income by Category section
// Implement using HashMap algorithms;

const runHashMap = (dbCategory, defaultCategory) => {
  const categoryTypes = defaultCategory;
  // Create an empty object to store all total amount of each categories from the userInput and match with default categories list (defaultCategory)
  let categoryObject = {};

  //Create a loop to store the name of default category in object and set the initial value of total amount as 0;
  const categoryTypeMap = () => {
    for (let i = 0; i < categoryTypes.length; i++) {
      categoryObject[categoryTypes[i]] = 0;
    }
    return categoryObject;
  };
  categoryTypeMap();

  //Function to match all userInput in database with default categories, and add the total amount in the correct category.
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
