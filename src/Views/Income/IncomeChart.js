import { ResponsivePie } from "@nivo/pie";
const IncomeChart = ({ income }) => {
  const data = [
    {
      id: "Rental Income",
      label: "Rental",
      value: income["Rental Income"],
      color: "hsl(320, 70%, 50%)",
    },
    {
      id: "Employment Income",
      label: "Employment",
      value: income["Employment Income"],
      color: "hsl(31, 70%, 50%)",
    },
    {
      id: "Investment Income",
      label: "Investment",
      value: income["Investment Income"],
      color: "hsl(112, 70%, 50%)",
    },
    {
      id: "Other Income",
      label: "Other",
      value: income["Other Income"],
      color: "hsl(43, 70%, 50%)",
    },
    {
      id: "Retirement Income",
      label: "Retirement",
      value: income["Retirement Income"],
      color: "hsl(186, 70%, 50%)",
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

export default IncomeChart;
