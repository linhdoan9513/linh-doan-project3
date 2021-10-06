//Create a higher function to calculate total for income and expense
const runTotal = (formattedData) => {
  let total = 0;
  const calculateTotal = () => {
    if (formattedData !== undefined) {
      for (let i = 0; i < formattedData.length; i++) {
        total += formattedData[i][1].amount;
      }
    }
    return total;
  };
  calculateTotal();
  return total;
};

export { runTotal };
