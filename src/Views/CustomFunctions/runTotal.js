//Create a higher function to calculate total for income and expense
const runTotal = (data) => {
  if (data === undefined) {
    return 0;
  }

  return data.reduce((acc, item) => {
    return acc + item[1].amount;
  }, 0);
};

export { runTotal };
