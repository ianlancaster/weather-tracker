import React, { Component } from 'react';

import ExtendedForecast from './ExtendedForecast';
import FullDay from './FullDay';
import WeatherSummary from './WeatherSummary';

class CurrentWeather extends Component {
  constructor() {
    super();
    this.state = {
      hideExtended: true,
      hideFullDay: true,
    };
    this.toggleHideExtended = this.toggleHideExtended.bind(this);
    this.toggleHideFullDay = this.toggleHideFullDay.bind(this);
  }

  componentWillMount() {
    const { fetchForecast } = this.props;
    console.log('city', this.props.params.city);
    if (this.props.params.city === 'currentLocation') {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchForecast({ lat: position.coords.latitude, lon: position.coords.longitude });
      });
    } else {
      fetchForecast({ city: this.props.params.city });
    }
  }

  toggleHideExtended() {
    this.setState({
      hideExtended: !this.state.hideExtended,
    });
  }

  toggleHideFullDay() {
    this.setState({
      hideFullDay: !this.state.hideFullDay,
    });
  }

  render() {
    return (
      <div>
        <WeatherSummary
          currentTemp={Math.round(this.props.temp)}
          lowTemp={Math.round(this.props.tempMin)}
          highTemp={Math.round(this.props.tempMax)}
          mainWeather={this.props.mainWeather}
        />
        <button onClick={this.toggleHideFullDay}> Show Full Day Forecast </button>
        <button onClick={this.toggleHideExtended}> Show Extended Forecast </button>
        {!this.state.hideFullDay && (<FullDay fullDay={this.props.fullDay} />)}
        {!this.state.hideExtended && (<ExtendedForecast />)}
      </div>
    );
  }
}

module.exports = CurrentWeather;
