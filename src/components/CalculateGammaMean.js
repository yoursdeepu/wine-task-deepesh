import React from "react";
import data from "../JSON/Wine-Data.json";

const CalculateGammaMean = ({ wineClass }) => {
  // Filter the wines with Alcohol class 
  const filteredData = data.filter((wine) => wine.Alcohol === wineClass);
  //Gamma = (Ash * Hue) / Magnesium.
  const filteredGammaData = filteredData.map(
    (wine) => (wine.Ash * wine.Hue) / wine.Magnesium
  );
  // Calculate the sum of gamma
  const sum = filteredGammaData.reduce((acc, wine) => acc + wine, 0);
  // Calculate the mean
  const mean = Math.round((sum / filteredData.length) * 1000) / 1000;

  return <div>{mean}</div>;
};

export default CalculateGammaMean;
