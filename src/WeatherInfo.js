import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <h5>
        <FormattedDate date={props.data.date} />
      </h5>
      <h6 className="text-capitalize">{props.data.description}</h6>

      <div className="row">
        <div className="col-6">
          <div className="Clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>

            <div className="float-left">
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <span className="weather_info">
            <ul>
              <li>Wind: {props.data.wind} km/h</li>
              <li>Humidity: {props.data.humidity}</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
