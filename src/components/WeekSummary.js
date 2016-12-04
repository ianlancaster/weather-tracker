import React from 'react';
import moment from 'moment';

const WeekSummary = ({ data }) => {

  let highTemp = Math.round(data.temp.max);
  let lowTemp = Math.round(data.temp.min);
  let humidity = Math.round(data.humidity);
  let windSpeed = Math.round(data.speed);

  return (
    <div>
      <h3>{moment.unix(data.dt).calendar()}</h3>
      <h4>Description: {data.weather[0].description}</h4>
      <h4>High: {highTemp}°F </h4>
      <h4>Low: {lowTemp}°F</h4>
      <h4>Humidity: {humidity}% </h4>
      <h4>Wind Speed: {windSpeed} MPH</h4>
    </div>
  );
};

module.exports = WeekSummary;
