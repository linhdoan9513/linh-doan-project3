const useTotal = (formattedData) => {
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

export default useTotal;
