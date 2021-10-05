const useFormat = (array) => {
  let formattedDatabase = [];
  const pushValue = () => {
    Object.entries(array).map(([_, value]) => {
      return formattedDatabase.push(value);
    });
  };

  pushValue();
  return formattedDatabase;
};

export default useFormat;
