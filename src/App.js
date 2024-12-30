import React, { useState, useRef } from "react";
import axios from "axios";
import Navigation from "./components/Navigation";
import UserInput from "./components/UserInput";
import WeatherDisplay from "./components/WeatherDisplay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const cache = useRef({});

  const fetchWeatherData = async (data) => {
    const cacheKey = JSON.stringify(data);
    if (cache.current[cacheKey]) {
      console.log("Using cached data");
      setWeatherData(cache.current[cacheKey]);
      return;
    }

    setLoading(true);
    setWeatherData(null);

    try {
      const response = await axios.get("https://archive-api.open-meteo.com/v1/era5", {
        params: {
          ...data,
          daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "temperature_2m_mean",
            "apparent_temperature_max",
            "apparent_temperature_min",
            "apparent_temperature_mean",
          ].join(","),
          timezone: "auto",
        },
      });

      if (response.data) {
        setWeatherData(response.data);
        cache.current[cacheKey] = response.data; // Cache the result
      } else {
        toast.error("No data found for the given input!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error fetching weather data:", error.response?.data?.reason);
      toast.error(`${error.response?.data?.reason || "Unknown error occurred"}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="w-full bg-gray-800 min-h-screen p-6 shadow-md">
        <UserInput fetchWeatherData={fetchWeatherData} />
        <WeatherDisplay weatherData={weatherData} loading={loading} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
