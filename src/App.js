import React from "react";
import Calculatemean from "./components/Calculatemean";
import Calculatemode from "./components/Calculatemode";
import Calculatemedian from "./components/Calculatemedian";
import CalculateGammaMean from "./components/CalculateGammaMean";
import CalculateGammaMedian from "./components/CalculateGammaMedian";
import CalculateGammaMode from "./components/CalculateGammaMode";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Flavanoids Table</h1>
      {/* Flavanoids Table */}

      <table
        style={{
          width: "60%",
          borderCollapse: "collapse",
          marginTop: "20px",
          border: "solid 1px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={tableHeaderStyle}>Measure</th>
            <th style={tableHeaderStyle}>Class 1</th>
            <th style={tableHeaderStyle}>Class 2</th>
            <th style={tableHeaderStyle}>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr style={tableHeaderStyle}>
            <td style={tableCellStyle}> Flavanoids Mean</td>
            <td style={tableCellStyle}>
              <Calculatemean wineClass={1} />
            </td>
            <td style={tableCellStyle}>
              <Calculatemean wineClass={2} />
            </td>
            <td style={tableCellStyle}>
              <Calculatemean wineClass={3} />
            </td>
          </tr>
          <tr style={tableHeaderStyle}>
            <td style={tableCellStyle}>Flavanoids Median </td>
            <td style={tableCellStyle}>
              <Calculatemedian wineCLass={1} />
            </td>
            <td style={tableCellStyle}>
              <Calculatemedian wineCLass={2} />
            </td>
            <td style={tableCellStyle}>
              <Calculatemedian wineCLass={3} />
            </td>
          </tr>
          <tr style={tableHeaderStyle}>
            <td style={tableCellStyle}>Flavanoids Mode</td>
            <td style={tableCellStyle}>
              <Calculatemode wineClass={1} />
            </td>
            <td style={tableCellStyle}>
              <Calculatemode wineClass={2} />
            </td>
            <td style={tableCellStyle}>
              <Calculatemode wineClass={3} />
            </td>
          </tr>
        </tbody>
      </table>

      {/*-------------------- Gamma Table------------------ */}

      <h1>Gamma Table</h1>
      {/* Gamma table */}
      <table
        style={{
          width: "60%",
          borderCollapse: "collapse",
          marginTop: "20px",
          border: "solid 1px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={tableHeaderStyle}>Measure</th>
            <th style={tableHeaderStyle}>Class 1</th>
            <th style={tableHeaderStyle}>Class 2</th>
            <th style={tableHeaderStyle}>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr style={tableHeaderStyle}>
            <td style={tableCellStyle}> Gamma Mean</td>
            <td style={tableCellStyle}>
              <CalculateGammaMean wineClass={1} />
            </td>
            <td style={tableCellStyle}>
              <CalculateGammaMean wineClass={2} />
            </td>
            <td style={tableCellStyle}>
              <CalculateGammaMean wineClass={3} />
            </td>
          </tr>
          <tr style={tableHeaderStyle}>
            <td style={tableCellStyle}>Gamma Median </td>
            <td style={tableCellStyle}>
              <CalculateGammaMedian wineCLass={1} />
            </td>
            <td style={tableCellStyle}>
              <CalculateGammaMedian wineCLass={2} />
            </td>
            <td style={tableCellStyle}>
              <CalculateGammaMedian wineCLass={3} />
            </td>
          </tr>
          <tr style={tableHeaderStyle}>
            <td style={tableCellStyle}>Gamma Mode</td>
            <td style={tableCellStyle}>
              <CalculateGammaMode wineClass={1} />
            </td>
            <td style={tableCellStyle}>
              <CalculateGammaMode wineClass={2} />
            </td>
            <td style={tableCellStyle}>
              <CalculateGammaMode wineClass={3} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
// Css for tables:
const tableHeaderStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "12px",
  textAlign: "left",
};

export default App;
