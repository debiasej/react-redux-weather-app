import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td><Chart data={ temps } color="orange" units="ºC" /></td>
        <td><Chart data={ pressures } color="green" units="hPa" /></td>
        <td><Chart data={ humidities } color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (ºC)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  // const weather = state.weather;
  return {weather: state.weather}; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
