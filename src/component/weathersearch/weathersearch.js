import React from 'react';
import WebServices from './../../services/webservices';

export default class WeatherSearch extends React.Component {

    serverUrl = "http://api.openweathermap.org/data/2.5/weather";
    appId = "5536f021b58776944ade38cabdf28b46";
    units = "metric";
    
    get cityName(){
        return this._cityName;
    }

    set cityName(value){
        this._cityName = value;
    }

    state = {
        "cityName" : "Berlin"
    }

    render() {
        return (
            <div className="search-city">
                <div className="input-group">
                    <input type="text" className="custom-input" placeholder="City Name" value={this.state.cityName} onChange={this.updateCityName}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => this.getWeatherDetails()}>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.getWeatherDetails();
    }

    updateCityName = (event) => {
        this.setState({
            "cityName" : event.target.value
        });
    }

    getWeatherDetails(){
        const webServices = new WebServices();
        let url = this.serverUrl + "?q=" + this.state.cityName + "&APPID=" + this.appId  + "&units=" + this.units;
        let fetchRequest = webServices.get(url, {});
        fetchRequest.then((response) => {
            console.log(response);
            if(response.cod === 200){
                this.props.result(response);
            }else{
                alert(response.message);
            } 
        });
    }
}