import React from "react";
import data from "../JSON/Wine-Data.json";

const Calculatemean = ({ wineClass }) => {
  //Calculate Flavanoids Means:

  // Filter the wines with Alcohol class 
  const filteredData = data.filter((wine) => wine.Alcohol === wineClass);

  // Calculate the sum of Flavanoids
  const sum = filteredData.reduce((acc, wine) => acc + wine.Flavanoids, 0);

  // Calculate the mean

  const mean = Math.round((sum / filteredData.length) * 1000) / 1000;

  // console.log(mean);

  return <div> {mean}</div>;
};

export default Calculatemean;
