const useFormat = (transactions) => {
  let transactionEntries = Object.entries(transactions);
  const sortByDate = () => {
    // In place: sort in place: array [3,2,1]; actually origin array;
    //Not in place: create a new array, and then copy items from original array and then sort new array and then return new array sorted.

    //this line to convert object into array

    // this line to sort in place
    transactionEntries.sort((t1, t2) => {
      let date1 = t1[1].date;
      let date2 = t2[1].date;
      let res = -date1.localeCompare(date2);
      return res;
    });
    return transactionEntries;
  };

  sortByDate();
  return transactionEntries;
};

export default useFormat;
