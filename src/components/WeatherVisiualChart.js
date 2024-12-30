import React, { useState } from "react";
import TableComponent from "./TableData";
import ChartComponent from "./ChartData";

const WeatherVisualization = ({ weatherData }) => {
  const [selectedData, setSelectedData] = useState("apparent_temperature_mean");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;
  
  if (!weatherData?.daily) {
    return <div className="text-white">No weather data available.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <label htmlFor="dataSelector" className="text-white font-bold block mb-2">
            Select Data:
          </label>
          <select
            id="dataSelector"
            value={selectedData}
            onChange={(e) => setSelectedData(e.target.value)}
            className="w-full rounded-md bg-gray-900 text-gray-300 border border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="apparent_temperature_mean">Apparent Temperature Mean</option>
            <option value="temperature_2m_mean">Temperature 2m Mean</option>
          </select>
        </div>
        <ChartComponent weatherData={weatherData} selectedData={selectedData} />
      </div>

      <div className="w-full md:w-1/2">
        <TableComponent
          weatherData={weatherData}
          selectedData={selectedData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </div>
  );
};

export default WeatherVisualization;
