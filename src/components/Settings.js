import React, { Component } from 'react';
import { pull, isUndefined } from 'lodash';
import { Link } from 'react-router';

import SettingsContainer from '../containers/SettingsContainer';
import NewLocationInputContainer from '../containers/NewLocationInputContainer';

const Settings = ({ pinnedCities, removeCity }) => {
  pinnedCities = pull(pinnedCities, undefined); //eslint-disable-line
  let input;

  let disabled = '';

  if (!isUndefined(pinnedCities)) {
    disabled = pinnedCities.length >= 3 ? 'disabled' : '';
  }
  return (
    <div>
      <h1 className="pinned-cities-title">Pinned Cities:</h1>
      <ul className="settings-city-name">
        {pinnedCities ?
        pinnedCities.map((city, i) =>
          <li key={i}>
            <Link to={`/weather/${city}`}>
              {city}
            </Link>
            <button
              onClick={() => removeCity(city)}>X</button>
          </li>,
        )
        : <li>Add a city to the list below: </li>}
      </ul>
      <NewLocationInputContainer disabled={disabled} />
    </div>
  );
};

module.exports = Settings;
