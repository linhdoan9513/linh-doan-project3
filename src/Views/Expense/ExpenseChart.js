import { ResponsivePie } from "@nivo/pie";

const ExpenseChart = ({ expense }) => {
  const data = [
    {
      id: "Cash",
      label: "Cash",
      value: expense["Cash"],
      color: "hsl(320, 70%, 50%)",
    },
    {
      id: "Dinning Out",
      label: "Dinning Out",
      value: expense["Dinning Out"],
      color: "hsl(31, 70%, 50%)",
    },
    {
      id: "Education",
      label: "Education",
      value: expense["Education"],
      color: "hsl(112, 70%, 50%)",
    },
    {
      id: "Groceries",
      label: "Groceries",
      value: expense["Groceries"],
      color: "hsl(43, 70%, 50%)",
    },
    {
      id: "Health",
      label: "Health",
      value: expense["Health"],
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "House Hold",
      label: "House Hold",
      value: expense["House Hold"],
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "Shopping",
      label: "Shopping",
      value: expense["Shopping"],
      color: "#4048cc",
    },
    {
      id: "Transportation",
      label: "Transportation",
      value: expense["Transportation"],
      color: "#0081a7",
    },
    {
      id: "Utilities",
      label: "Utilities",
      value: expense["Utilities"],
      color: "#61CDBB",
    },
  ];

  return (
    <div className="pieChart">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={14}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["opacity", "0.2"]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextOffset={5}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsDiagonalLength={10}
        arcLinkLabelsStraightLength={10}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabel="value"
        sortByValue="true"
        arcLabelsSkipAngle={8}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", "3"]] }}
        theme={{
          tooltip: {
            container: {
              color: "white",
              background: "black",
            },
          },
        }}
      />
    </div>
  );
};

export default ExpenseChart;
