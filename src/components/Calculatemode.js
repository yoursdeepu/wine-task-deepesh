import React from "react";
import data from "../JSON/Wine-Data.json";

const Calculatemode = ({ wineClass }) => {
  //Calculate Flavanoids Mode:

  // Filter the wines with Alcohol class 
  const filteredData = data.filter((wine) => wine.Alcohol === wineClass);

  // Create an object to store the frequency of each Flavanoids value
  const frequency = {};

  // Iterate over the filtered data to populate the frequency object
  filteredData.forEach((wine) => {
    const flavanoids = wine.Flavanoids;
    if (frequency[flavanoids]) {
      frequency[flavanoids]++;
    } else {
      frequency[flavanoids] = 1;
    }
  });

  // Find the Flavanoids value(s) with the highest frequency
  let maxFrequency = 0;
  let modes = [];

  for (const flavanoids in frequency) {
    if (frequency[flavanoids] > maxFrequency) {
      maxFrequency = frequency[flavanoids];
      modes = [flavanoids];
    } else if (frequency[flavanoids] === maxFrequency) {
      modes.push(flavanoids);
    }
  }

  return <div>{modes[0]}</div>;
};

export default Calculatemode;
