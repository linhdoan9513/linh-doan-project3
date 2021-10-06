import { ResponsivePie } from "@nivo/pie";
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
    arcLinkLabelsTextOffset={15}
    arcLinkLabelsTextColor="white"
    arcLinkLabelsDiagonalLength={21}
    arcLinkLabelsStraightLength={36}
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabel="value"
    sortByValue="true"
    arcLabelsSkipAngle={8}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", "3"]] }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: true,
        translateX: 33,
        translateY: 68,
        itemsSpacing: 0,
        itemWidth: 104,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 24,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
    theme={{
      tooltip: {
        container: {
          color: "white",
          background: "black",
        },
      },
    }}
  />
</div>;

const data = [
  {
    id: "scala",
    label: "scala",
    value: 452,
    color: "hsl(320, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 459,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 205,
    color: "hsl(112, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 527,
    color: "hsl(43, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 999,
    color: "hsl(186, 70%, 50%)",
  },
];
