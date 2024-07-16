import React from 'react'

const Weather = ({weather}) => {
  return (
    <div>
{weather ? (
        <div>
         <h2>Weather in {weather.name}</h2>
          <h3> <p>Temperature: {Math.round(weather.main.temp-273)}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
            </h3> 

        </div>
      ) : (
        <h2>please enter the correct city name or pincode</h2>
      )}    </div>
  )
}

export default Weather


