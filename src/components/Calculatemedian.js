import React from "react";
import data from "../JSON/Wine-Data.json";

const Calculatemedian = ({wineCLass}) => {
//Calculate Flavanoids Median:

  // Filter the wines with Alcohol class
  const filteredData = data.filter((wine) => wine.Alcohol === wineCLass);

  // Extract the Flavanoids values and sort them
  const sortedFlavanoids = filteredData
    .map((wine) => wine.Flavanoids)
    .sort((a, b) => a - b);

  // Calculate the median
  const middleIndex = Math.floor(sortedFlavanoids.length / 2);
  const median =
    sortedFlavanoids.length % 2 === 0
      ? (sortedFlavanoids[middleIndex - 1] + sortedFlavanoids[middleIndex]) / 2
      : sortedFlavanoids[middleIndex];
  

  return <div>{median}</div>;
};

export default Calculatemedian;
