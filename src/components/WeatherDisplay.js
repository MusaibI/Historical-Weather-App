import React from 'react'
import WeatherVisualization from './WeatherVisiualChart'

export default function WeatherDisplay(props) {
    const { weatherData, loading, hasError } = props
    return (
        <div className="w-full px-4 mt-8 mx-auto">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                    <h1 className="text-white text-2xl font-bold mb-6 text-center">Fetching Data...</h1>
                </div>
            ) : hasError || !weatherData ? (
                <p className="text-gray-400 text-center">No data found</p>
            ) : (
                <WeatherVisualization weatherData={weatherData}/>
            )}
        </div>
    )
}
