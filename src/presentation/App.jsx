import React from "react";

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["IT Girls", 2],
  ["Learning new Language", 2],
  ["Eat", 2],
  ["Cleaning", 1],
  ["Playing Games", 5],
  ["Sleep", 8],
];

const options = {
  title: "My Daily Activities",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}
export { App };
