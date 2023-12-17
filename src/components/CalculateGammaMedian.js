import React from "react";
import data from "../JSON/Wine-Data.json";

const CalculateGammaMedian = ({ wineCLass }) => {
 // Filter the wines with Alcohol class 
 const filteredData = data.filter((wine) => wine.Alcohol === wineCLass);
 //Gamma = (Ash * Hue) / Magnesium.
 const filteredGammaData = filteredData.map(
   (wine) => (wine.Ash * wine.Hue) / wine.Magnesium
 );
  // Extract the gamma values and sort them
  const sortedGamma = filteredGammaData
    .map((wine) => wine)
    .sort((a, b) => a - b);

  // Calculate the median
  const middleIndex = Math.floor(sortedGamma.length / 2);
  const median =
    sortedGamma.length % 2 === 0
      ? (sortedGamma[middleIndex - 1] + sortedGamma[middleIndex]) / 2
      : sortedGamma[middleIndex];
     const roundedMedian=Math.round((median)*1000)/1000;
  
  return <div>{roundedMedian}</div>;
};

export default CalculateGammaMedian;
