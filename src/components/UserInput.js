import React from 'react';

export default function UserInput({ fetchWeatherData }) {
  const onFinish = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetchWeatherData(data);
  };

  return (
    <form onSubmit={onFinish}>
      <h1 className="text-white text-2xl font-bold mb-6 text-center">Weather Data Input</h1>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div>
          <label htmlFor="latitude" className="text-white font-bold mb-2 block">Latitude:</label>
          <input
            id="latitude"
            name="latitude"
            type="number"
            step="any"
            className="h-14 w-full rounded-lg shadow-md border border-gray-600 bg-gray-900 text-gray-300 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="longitude" className="text-white font-bold mb-2 block">Longitude:</label>
          <input
            id="longitude"
            name="longitude"
            type="number"
            step="any"
            className="h-14 w-full rounded-lg shadow-md border border-gray-600 bg-gray-900 text-gray-300 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="startDate" className="text-white font-bold mb-2 block">Start Date:</label>
          <input
            id="startDate"
            name="start_date"
            type="date"
            defaultValue="2025-01-01"
            className="h-14 w-full rounded-lg shadow-md border border-gray-600 bg-gray-900 text-gray-300 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="endDate" className="text-white font-bold mb-2 block">End Date:</label>
          <input
            id="endDate"
            name="end_date"
            type="date"
            defaultValue="2025-01-07"
            className="h-14 w-full rounded-lg shadow-md border border-gray-600 bg-gray-900 text-gray-300 px-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-800">
        <button
          type="submit"
          className="h-14 w-32 mt-10 rounded-lg shadow-lg border border-gray-600 bg-gray-900 text-gray-300 px-4 font-semibold focus:outline-none hover:bg-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
