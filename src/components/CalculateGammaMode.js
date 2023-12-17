import React from "react";
import data from "../JSON/Wine-Data.json";

const CalculateGammaMode = ({ wineClass }) => {
  // Filter the wines with Alcohol class
  const filteredData = data.filter((wine) => wine.Alcohol === wineClass);
  //Gamma = (Ash * Hue) / Magnesium.
  const filteredGammaData = filteredData.map(
    (wine) => (wine.Ash * wine.Hue) / wine.Magnesium
  );

  // Create an object to store the frequency of each gamma value
  const frequency = {};

  // Iterate over the filtered data to populate the frequency object
  filteredGammaData.forEach((wine) => {
    const gammaData = wine;
    if (frequency[gammaData]) {
      frequency[gammaData]++;
    } else {
      frequency[gammaData] = 1;
    }
  });

  // Find the gamma value(s) with the highest frequency
  let maxFrequency = 0;
  let modes = [];

  for (const gamma in frequency) {
    if (frequency[gamma] > maxFrequency) {
      maxFrequency = frequency[gamma];
      modes = [gamma];
    } else if (frequency[gamma] === maxFrequency) {
      modes.push(gamma);
    }
  }
  const roundedModes = Math.round(modes[0] * 1000) / 1000;
 

  return <div>{roundedModes}</div>;
};

export default CalculateGammaMode;
