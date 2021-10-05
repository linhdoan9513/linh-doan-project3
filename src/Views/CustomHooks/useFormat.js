const useFormat = (array) => {
  let formattedDatabase = [];
  const pushValue = () => {
    Object.entries(array).map(([_, value]) => {
      return formattedDatabase.push(value);
    });
  };

  pushValue();

  const formatDate = () => {
    return formattedDatabase.sort((a, b) => -a.date.localeCompare(b.date));
  };

  formatDate();
  return formattedDatabase;
};

export default useFormat;
