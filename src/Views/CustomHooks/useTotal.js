const useTotal = (array) => {
  let total = 0;
  const calculateTotal = () => {
    if (array !== undefined) {
      for (let i = 0; i < array.length; i++) {
        total += array[i].amount;
      }
    }
    return total;
  };
  calculateTotal();
  return total;
};

export default useTotal;
