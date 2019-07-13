import React from "react";
import "./weatherresults.css"

export default class WeatherResults extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm current-weather-image">
                        <img src={this.getWeatherDetails("icon")} alt="404" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm current-temp">
                        {this.getTemp("temp")} <sup>o</sup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 current-temp-range">
                        {this.getTemp("temp_min")} <sup>o</sup>
                    </div>
                    <div className="col-6 current-temp-range">
                        {this.getTemp("temp_max")} <sup>o</sup>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm weather-main">
                        {this.getWeatherDetails("main")}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm weather-desc">
                        {this.getWeatherDetails("description")}
                    </div>
                </div>
            </div>
        );
    }

    getTemp = (property) => {
        if(!this.props.result.main){
            return "-";
        }
        if(property){
            return this.props.result.main[property];
        }
    }

    getWeatherDetails = (property) => {
        if(!this.props.result.weather){
            return "";
        }
        if(property === "icon"){
            return "http://openweathermap.org/img/wn/" + this.props.result.weather[0].icon + "@2x.png";
        }
        return this.props.result.weather[0][property];
    }
}