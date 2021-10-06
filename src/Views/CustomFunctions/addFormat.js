//High level function to sort through Firebase database and sort by most recent date to the oldest date to display for Income by Date section and Expense By Date section

const addFormat = (transactions) => {
  let transactionEntries = Object.entries(transactions);
  transactionEntries.sort((t1, t2) => {
    let date1 = t1[1].date;
    let date2 = t2[1].date;
    let res = -date1.localeCompare(date2);
    return res;
  });

  return transactionEntries;
};

export { addFormat };
