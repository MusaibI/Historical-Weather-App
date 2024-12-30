import React from "react";

const TableComponent = ({ weatherData, selectedData, currentPage, setCurrentPage, rowsPerPage }) => {
  const labels = weatherData?.daily?.time || [];
  const chartData = weatherData?.daily[selectedData] || [];

  const tableData = labels.map((date, index) => ({
    date,
    value: chartData[index] ?? "N/A",
  }));

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="overflow-auto">
      <div className="shadow-md sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-700 bg-gray-900 text-gray-300">
          <thead className="bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {paginatedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-800 even:bg-gray-850 odd:bg-gray-900">
                <td className="px-6 py-4 text-sm">{row.date}</td>
                <td className="px-6 py-4 text-sm">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="flex justify-between items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-gray-300">
          Page {currentPage} of {totalPages}
        </p>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
