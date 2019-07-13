import React from 'react';
import "./weather.css";
import WeatherSearch from '../weathersearch/weathersearch';
import WeatherResults from '../weatherresults/weatherresults';



class Weather extends React.Component{
    state = {
        "result" : {}
    }

    updateResults = (results) => {
        this.setState({
            "result" : results
        });
        console.log("Updated results - " + results);
    }

    render() {
        return (
            <div className="weather-body">
                <WeatherSearch result={this.updateResults}/>
                <WeatherResults result={this.state.result}/>
            </div>
        );
    }
}
export default Weather;