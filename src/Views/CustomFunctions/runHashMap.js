//Create a higher level function to create an object that store the total amount of each category from the database of category to display in Income by Category section
// Implement using HashMap algorithms;

const runHashMap = (dbCategories, categoryTypes) => {
  // Create an empty object to store all total amount of each categories from the userInput and match with default categories list (defaultCategory)
  let categoryObject = {};

  //Create a loop to store the name of default category in object and set the initial value of total amount as 0;
  categoryTypes.forEach((category) => {
    categoryObject[category] = 0;
  });

  //Function to match all userInput in database with default categories, and add the total amount in the correct category.
  dbCategories.forEach((dbCategory) => {
    if (dbCategory[1].category in categoryObject) {
      categoryObject[dbCategory[1].category] += dbCategory[1].amount;
    }
  });

  return categoryObject;
};

export { runHashMap };
